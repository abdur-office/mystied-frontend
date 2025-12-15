import { CheckIcon } from "@/components/icons";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfoCircle } from "iconsax-reactjs";
export default function PayoutRequest() {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-2 border-b border-black/10 px-[18px] pt-2 pb-2.5 dark:border-white/10">
        <h2 className="font-primary text-sm font-medium text-black/80 uppercase dark:text-white/70">
          payout request
        </h2>
      </div>

      <div className="px-2 lg:px-5">
        <Alert className="relative h-12 items-center rounded-[10px] border-[#8253F24D] bg-black/5 px-3 py-3 dark:bg-[#8253F24D]/10">
          <InfoCircle
            variant="Broken"
            color="#0C78FF"
            className="inline-flex h-5 w-5 text-[#0C78FF]"
          />
          <AlertTitle className="font-primary text-base font-normal text-black before:absolute before:top-0 before:left-0 before:h-full before:w-7 before:rounded-l-[10px] before:bg-black/10 dark:text-white dark:before:bg-[#0C78FF]/20">
            Transactions can take up to 3-5 business days
          </AlertTitle>
        </Alert>
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

              <TableHead className="pb-2 text-black uppercase dark:text-white/70">
                description
              </TableHead>
              <TableHead className="w-12 pr-0 pb-2 text-black uppercase dark:text-white/70">
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
                <TableCell className="font-primary py-2 pl-0 text-sm leading-4 font-normal text-black/80 lowercase dark:text-white/90">
                  jun 2, 2025 7:24 pm
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/90">
                  74481799
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/90">
                  $80.00
                </TableCell>
                <TableCell className="font-primary py-2 text-xs font-normal text-black/80 lowercase dark:text-white/90">
                  Payout has been processed
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
