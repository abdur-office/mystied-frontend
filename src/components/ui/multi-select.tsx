// components/ui/multi-select.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import * as React from "react";
export type MultiSelectOption = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: MultiSelectOption[];
  value: MultiSelectOption[];
  onChange: (value: MultiSelectOption[]) => void;
  placeholder?: string;
  className?: string;
};

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items...",
  className,
}: MultiSelectProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: MultiSelectOption) => {
    onChange(value.filter((i) => i.value !== item.value));
  };

  const handleSelect = (item: MultiSelectOption) => {
    if (!value.find((i) => i.value === item.value)) {
      onChange([...value, item]);
    }
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const filteredOptions = options.filter(
    (option) => !value.find((v) => v.value === option.value),
  );

  return (
    <div className={`w-full ${className}`}>
      <Command className="overflow-visible border-none bg-transparent">
        <div className="focus-within:ring-theme-purple rounded-md border border-[#C7C7CC] bg-transparent px-1.5 py-[4px] text-sm focus-within:ring-1">
          <div className="flex flex-wrap gap-1">
            {value.map((item) => (
              <Badge
                key={item.value}
                variant="gray"
                className="text-common-text h-[18px] rounded-sm px-1 py-0.5 text-[10px] font-normal tracking-[0.12px] select-none dark:bg-[#3A3A3C] dark:text-white"
              >
                {item.label}
                <span
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="text-common-text ml-1 size-2 cursor-pointer hover:text-black dark:text-white" />
                </span>
              </Badge>
            ))}

            <CommandPrimitive.Input
              value={inputValue}
              onValueChange={setInputValue}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none placeholder:text-[10px]"
            />
          </div>
        </div>

        {open && filteredOptions.length > 0 && (
          <div className="relative mt-2">
            <CommandList>
              <div className="absolute z-10 w-full rounded-md border border-[#C7C7CC] bg-[#F0EEEE] text-black shadow-md outline-none dark:border-[#3A3A3C] dark:bg-[#25242B]">
                <CommandGroup>
                  {filteredOptions.map((option, i) => (
                    <CommandItem
                      key={i}
                      value={option.label}
                      onMouseDown={(e) => e.preventDefault()}
                      onSelect={() => handleSelect(option)}
                      className="text-common-text cursor-pointer py-0.5 text-[10px] font-normal tracking-[0.12px] dark:text-white"
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}

/* USE 
import { MultiSelect, MultiSelectOption } from '@/components/ui/multi-select';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

const countryOptions: MultiSelectOption[] = [
	{ value: 'us', label: 'United States' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'fr', label: 'France' },
	{ value: 'de', label: 'Germany' },
	// ...etc
];

// Inside your form JSX
<FormField
	name="countries"
	render={({ field }) => (
		<FormItem>
			<FormLabel>Countries</FormLabel>
			<FormControl>
				<MultiSelect
					options={countryOptions}
					value={field.value || []}
					onChange={field.onChange}
					placeholder="Select countries..."
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	)}
/>


*/
