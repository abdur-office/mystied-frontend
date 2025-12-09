/* How to use

// alertConfirm('Create', 'Are you sure?', () => {})

 const onSubmit = async (values: any) => {
    alertConfirm({
      onOk: async () => {
        try {

          // try code 

        } catch (error) {
         
        	// error code 

        }
      },

      // optional
      onCancel: () => {
     		 // 
       },
    })
  }

*/

"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react"; // Optional: use any spinner icon you prefer
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { cn } from "../utils";

export const alertConfirm = ({
  onOk,
  onCancel,
  title = "Confirm",
  content = "Are you sure you want to proceed?",
  confirmBtnText = "Confirm",
  cancelBtnText = "Cancel",
  className,
  clickOutSide = false,
  confirmSuccess = false,
}: {
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  title?: string;
  content?: React.ReactNode;
  confirmBtnText?: string;
  cancelBtnText?: string;
  className?: string;
  clickOutSide?: boolean;
  confirmSuccess?: boolean;
}) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div);
  const body = document.body;

  const cleanup = () => {
    body.style.pointerEvents = "";
    root.unmount();
    div.remove();
  };

  const ConfirmComponent = () => {
    const [open, setOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (clickOutSide) {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            contentRef.current &&
            !contentRef.current.contains(event.target as Node)
          ) {
            handleCancel();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, []);

    useEffect(() => {
      document.body.style.pointerEvents = open ? "" : "none";
    }, [open]);

    const handleConfirm = async () => {
      try {
        setIsLoading(true);
        onOk && (await onOk());
        cleanup(); // Close only after async logic finishes
      } catch (error) {
        console.error(error);
        // Optionally keep it open or show error
      } finally {
        setIsLoading(false);
      }
    };

    const handleCancel = () => {
      if (!isLoading) {
        onCancel && onCancel();
        cleanup();
      }
    };

    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          ref={contentRef}
          className={cn(
            "w-fit min-w-[300px] rounded-lg border border-white/10 bg-[#232428] px-3.5 py-4 pr-9 sm:max-w-full",
            className,
          )}
        >
          <AlertDialogHeader className={cn("gap-y-3 text-left")}>
            <AlertDialogTitle
              hidden={confirmSuccess}
              className="font-primary text-lg font-semibold"
            >
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs leading-[150%] font-medium text-white">
              {content}
            </AlertDialogDescription>
            <Button
              hidden={confirmSuccess}
              className="absolute top-1.5 right-1 text-white hover:text-white/80"
              variant="link"
              size="icon"
              onClick={handleCancel}
            >
              <X className="size-5" />
            </Button>
          </AlertDialogHeader>
          <AlertDialogFooter
            className={cn(
              "flex-row",
              confirmSuccess ? "sm:justify-end" : "sm:justify-start",
            )}
          >
            <Button
              onClick={handleConfirm}
              disabled={isLoading}
              size="xs"
              className="rounded-md text-xs"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {confirmBtnText}
            </Button>
            {!confirmSuccess && (
              <AlertDialogCancel
                disabled={isLoading}
                onClick={handleCancel}
                className="hover:bg-theme-danger h-[30px] rounded-md border border-white/10 bg-transparent text-xs hover:text-white"
              >
                {cancelBtnText}
              </AlertDialogCancel>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  root.render(<ConfirmComponent />);
};
