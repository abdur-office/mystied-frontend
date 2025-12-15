import { CheckIcon } from "@/components/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lovely } from "iconsax-reactjs";

export default function Earnings() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 border-b border-black/10 px-[18px] pt-2 pb-2.5 dark:border-white/10">
        <h2 className="font-primary text-sm font-medium text-black/80 uppercase dark:text-white/70">
          Earnings
        </h2>
        <p className="font-primary line-clamp-1 text-xs text-black/80 lowercase dark:text-white/70">
          date/time shown in local time (UTC +06: 00)
        </p>
      </div>
      <div className="pt-4">
        <Table>
          <TableHeader className="border-b-none">
            <TableRow className="font-primary border-none text-xs">
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                date & time
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                amount
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                fee
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                net
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                description
              </TableHead>
              <TableHead className="w-12 pb-2 text-black uppercase dark:text-white/70">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {/* Empty  */}
            <TableRow className="hidden border-none">
              <TableCell
                colSpan={5}
                className="font-primary pt-4 pb-3 text-center text-sm leading-4 font-normal text-black/80 lowercase dark:text-white/60"
              >
                this list is empty
              </TableCell>
            </TableRow>
            {Array.from({ length: 15 }).map((_, index) => (
              <TableRow
                key={index}
                className="border-solid border-black/10 dark:border-white/10"
              >
                <TableCell className="font-primary py-2 text-sm leading-4 font-normal text-black/80 lowercase dark:text-white/95">
                  jun 2, 2025 <br /> 7:24 pm
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/95">
                  $100.00
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/95">
                  $20.00
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/95">
                  $80.00
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/95">
                  <div className="flex items-center gap-1">
                    Tip from <span className="text-[#A079FF]">perkymia</span>
                    <Lovely size={16} color="#EC3AA6" variant="Broken" />
                  </div>
                </TableCell>
                <TableCell className="font-primary py-2 text-right text-sm font-normal text-white/95 lowercase">
                  <CheckIcon size={24} className="ml-auto stroke-[#A079FF]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
