"use client";

import { CircleOff, Flag, MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDialog() {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Flag className="mr-1.5 size-4 text-white" /> Report
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleOff className="mr-1.5 size-4 text-white" /> Block
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
