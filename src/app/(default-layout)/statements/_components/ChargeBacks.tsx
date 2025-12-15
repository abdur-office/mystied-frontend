import { CheckIcon } from "@/components/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function ChargeBacks() {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-2 border-b border-black/10 px-[18px] pt-2 pb-2.5 dark:border-white/10">
        <h2 className="font-primary text-sm font-medium text-black/80 uppercase dark:text-white/70">
          charge backs
        </h2>
      </div>

      <div className="m-2 rounded-[10px] border border-black/10 p-3 lg:m-5 lg:p-4 dark:border-white/20">
        <Table>
          <TableHeader className="border-b-none">
            <TableRow className="font-primary border-none text-xs">
              <TableHead className="pb-2 pl-0 text-black uppercase dark:text-white/70">
                date & time
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                invoice
              </TableHead>
              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                AMOUNT
              </TableHead>

              <TableHead className="w-12 pr-0 pb-2 text-black uppercase dark:text-white/70">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {/* Empty  */}
            <TableRow className="border-none">
              <TableCell
                colSpan={4}
                className="font-primary pt-4 pb-3 text-center text-sm leading-4 font-normal text-black/80 lowercase dark:text-white/60"
              >
                this list is empty
              </TableCell>
            </TableRow>
            {Array.from({ length: 15 }).map((_, index) => (
              <TableRow key={index} className="hidden border-solid">
                <TableCell className="font-primary py-2 pl-0 text-sm leading-4 font-normal text-black/80 lowercase dark:text-white/90">
                  jun 2, 2025 7:24 pm
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/90">
                  74481799
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/90">
                  $80.00
                </TableCell>
                <TableCell className="font-primary py-2 pr-0 text-right text-sm font-normal text-white/95 lowercase">
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
