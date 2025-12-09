"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/copy-button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { alertConfirm } from "@/lib/confirm";
import Link from "next/link";
import { useState } from "react";

export default function ThemeAlertConfirm() {
  const handlePopup = (onOk?: () => void) => {
    alertConfirm({
      title: "Issue Warning",
      className: "sm:max-w-[300px] gap-11",
      content:
        "This id have issue with content, do you want to approve the warning?",
      onOk: () => {
        if (typeof onOk === "function") {
          onOk();
        }
      },
      onCancel: () => {
        console.log("Cancelled");
      },
    });
  };

  const handlePopupOkMessage = () => {
    handlePopup(() => {
      alertConfirm({
        confirmSuccess: true,
        className: "sm:max-w-[300px] gap-6 pr-3.5",
        confirmBtnText: "Ok",
        clickOutSide: true,
        content: (
          <span>
            Thanks. We've received your report. If we find this content to be in
            violation of our Community Guidelines, we will remove it.
            <Link
              className="text-theme-purple block"
              href="https://www.google.com"
            >
              Learn more
            </Link>
          </span>
        ),
        onOk: () => {
          console.log("Confirmed");
        },
        onCancel: () => {
          console.log("Cancelled");
        },
      });
    });
  };

  const [open, setOpen] = useState(false);
  const reportOptions = [
    {
      label: "Unwanted commercial content or spam",
      value: "unwanted-commercial-content-or-spam",
    },
    {
      label: "Pornography or sexually explicit material",
      value: "pornography-or-sexually-explicit-material",
    },
    { label: "Child abuse", value: "child-abuse" },
    {
      label: "Hate speech or graphic violence",
      value: "hate-speech-or-graphic-violence",
    },
    { label: "Promotes terrorism", value: "promotes-terrorism" },
    { label: "Harassment or bullying", value: "harassment-or-bullying" },
    { label: "Suicide or self injury", value: "suicide-or-self-injury" },
    { label: "Misinformation", value: "misinformation" },
  ];
  const handleReport = () => {
    alertConfirm({
      confirmSuccess: true,
      clickOutSide: true,
      className: "sm:max-w-[300px] gap-6 pr-3.5",
      confirmBtnText: "Ok",
      content: (
        <span>
          Thanks. We've received your report. If we find this content to be in
          violation of our Community Guidelines, we will remove it.
          <Link
            className="text-theme-purple block"
            href="https://www.google.com"
          >
            Learn more
          </Link>
        </span>
      ),
      onOk: () => {
        setOpen(false);
      },
      onCancel: () => {
        console.log("Cancelled");
      },
    });
  };
  return (
    <div className="flex gap-2">
      <div>
        <Button onClick={() => handlePopup()}>Confirm </Button>
        <CopyButton
          text={`alertConfirm({
        title: "Issue Warning",
            className: "sm:max-w-[300px] gap-11",
            content:
        "This id have issue with content, do you want to approve the warning?",
        onOk: () => {
            console.log("Confirmed");
      },
      onCancel: () => {
        console.log("Cancelled");
        },
        });`}
        />
      </div>
      <div>
        <Button onClick={handlePopupOkMessage}>Confirm Ok Message</Button>
        <CopyButton
          text={` alertConfirm({
        confirmSuccess: true,
        clickOutSide: true,
        className: "sm:max-w-[300px] gap-6 pr-3.5",
        confirmBtnText: "Ok",
        content: (
          <span>
            Thanks. We've received your report. If we find this content to be in
            violation of our Community Guidelines, we will remove it.
            <Link
              className="text-theme-purple block"
              href="https://www.google.com"
            >
              Learn more
            </Link>
          </span>
        ),
        onOk: () => {
          console.log("Confirmed");
        },
        onCancel: () => {
          console.log("Cancelled");
        },
      });`}
        />
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            className="w-fit"
            variant="outline"
            onClick={() => setOpen(true)}
          >
            Report Message
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-fit min-w-[300px] gap-y-6 rounded-lg border border-white/10 bg-[#232428] px-3.5 py-4 pr-9 sm:max-w-full">
          <AlertDialogHeader className="gap-y-4">
            <AlertDialogTitle className="font-primary text-lg font-semibold">
              Report Message
            </AlertDialogTitle>

            <div className="flex flex-wrap gap-2">
              <RadioGroup defaultValue={reportOptions[0].value}>
                {reportOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2.5"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      className="text-xs font-medium"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-start">
            <AlertDialogCancel
              className="hover:bg-theme-danger h-[30px] rounded-md border border-white/10 bg-transparent text-xs hover:text-white"
              onClick={() => setOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <Button
              onClick={handleReport}
              size="xs"
              className="rounded-md text-xs"
            >
              Report
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
