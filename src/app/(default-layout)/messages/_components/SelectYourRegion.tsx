"use client";

import { Check, Search, X } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Edit2 } from "iconsax-reactjs";

type Country = {
  id: string;
  country: string;
  region?: string;
  flag: string;
};

const defaultCountries: Country[] = [
  {
    id: "aland-islands",
    country: "Aland Islands",
    region: "Mariehamn",
    flag: "https://i.ibb.co.com/G4tQpyV8/IS.jpg",
  },
  {
    id: "usa-california",
    country: "United States, California",
    region: "West Coast, USA",
    flag: "https://i.ibb.co.com/tT1n9T4c/US.jpg",
  },
  {
    id: "australia",
    country: "Australia",
    region: "Sydney",
    flag: "https://i.ibb.co.com/qLQtd4jQ/AU.jpg",
  },
  {
    id: "solomon-islands",
    country: "Solomon Islands",
    region: "Honiara",
    flag: "https://i.ibb.co.com/pjDNFntG/SB.jpg",
  },
  {
    id: "brazil",
    country: "Brazil",
    region: "Rio de Janeiro",
    flag: "https://i.ibb.co.com/qhqKL11/BR.jpg",
  },
  {
    id: "denmark",
    country: "Denmark",
    region: "Copenhagen",
    flag: "https://i.ibb.co.com/7J0v1j4p/DK.jpg",
  },
];

interface CountrySelectDialogProps {
  trigger?: ReactNode;
  onChange?: (country: Country) => void;
  contentClassName?: string;
}

export default function SelectYourRegion({
  trigger,
  onChange,
  contentClassName,
}: CountrySelectDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null,
  );

  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return defaultCountries;

    return defaultCountries.filter((country) =>
      `${country.country} ${country.region ?? ""}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const handleSelect = (country: Country) => {
    setSelectedCountryId(country.id);
    onChange?.(country);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <button>
            <Edit2 variant="Broken" className="size-4 text-[#7C797E]" />
          </button>
        )}
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={cn(
          "dark:bg-dark-1-card gap-3 rounded-[14px] border-white/10 bg-[#E5E5EA] p-2.5 pr-0 sm:max-w-[260px]",
          contentClassName,
        )}
      >
        {/* Header */}
        <div className="relative flex items-start justify-between">
          <DialogTitle className="text-base font-bold text-[#141414] dark:text-white">
            Select your region
          </DialogTitle>

          <DialogClose
            className="absolute top-0 right-2.5 bg-transparent"
            aria-label="Close"
          >
            <X className="size-6 text-black/70 dark:text-white/70" />
          </DialogClose>
        </div>

        {/* Search */}
        <div className="relative pr-4">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-black/60 dark:text-white/60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by City"
            className="dark:bg-dark-3-card placeholder:text-paragraph text-common-text h-10 w-full rounded-[14px] bg-[#C7C7CC] py-2.5 pl-10 text-sm focus:outline-none dark:bg-[#393741] dark:text-white"
          />
        </div>

        {/* List */}
        <div className="cst-scrollbar-2 max-h-[250px] overflow-y-auto pr-5 pl-1.5">
          {filteredCountries.length ? (
            filteredCountries.map((country) => {
              const selected = selectedCountryId === country.id;

              return (
                <div
                  key={country.id}
                  onClick={() => handleSelect(country)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-2xl px-2 py-1.5 transition",
                    selected
                      ? "bg-[#3E83FE] text-white"
                      : "hover:bg-black/5 dark:hover:bg-white/5",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="size-7.5 overflow-hidden rounded-full">
                      <Image
                        src={country.flag}
                        alt={`${country.country} flag`}
                        width={30}
                        height={30}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p
                      className={cn(
                        "text-xs font-medium",
                        selected
                          ? "text-white"
                          : "text-[#141414] dark:text-[#E9E8EB]",
                      )}
                    >
                      {country.country}
                    </p>
                  </div>

                  {/* Selected Indicator */}
                  {selected && (
                    <div
                      className={cn(
                        "flex size-[22px] items-center justify-center rounded-full bg-white",
                      )}
                    >
                      <Check strokeWidth={3} className="size-3 text-black" />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-black/10 px-4 py-10 text-center text-sm text-black/60 dark:border-white/10 dark:text-white/60">
              No matches for "{query}"
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
