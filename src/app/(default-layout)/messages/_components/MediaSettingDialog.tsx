import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, Settings } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { XIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";

const mediaSettingsSchema = z.object({
  tags: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    )
    .min(1, "Select at least one tag"),
  description: z.string().min(1, "Description is required"),
  recommendedPrice: z
    .string()
    .trim()
    .min(1, "Recommended price is required")
    .refine((val) => !Number.isNaN(Number(val)), {
      message: "Recommended price must be a number",
    })
    .refine((val) => Number(val) >= 0, {
      message: "Recommended price must be 0 or greater",
    }),
});

type MediaSettingsFormValues = z.infer<typeof mediaSettingsSchema>;

export function MediaSettingDialog() {
  const [open, setOpen] = useState(false);

  const tagOptions: MultiSelectOption[] = [
    { value: "photo", label: "Photo" },
    { value: "video", label: "Video" },
    { value: "document", label: "Document" },
    { value: "audio", label: "Audio" },
    { value: "other2", label: "Other2" },
    { value: "other3", label: "Other3" },
    { value: "other4", label: "Other4" },
    { value: "other5", label: "Other5" },
  ];

  const form = useForm<MediaSettingsFormValues>({
    resolver: zodResolver(mediaSettingsSchema),
    defaultValues: {
      tags: [],
      description: "",
      recommendedPrice: "",
    },
  });

  const onSubmit = (values: MediaSettingsFormValues) => {
    const payload = {
      ...values,
      recommendedPrice: Number(values.recommendedPrice),
    };

    console.log("Media settings submitted", payload);
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="rounded p-1 text-white hover:bg-white/20">
          <Settings className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
        className="rounded-[20px] bg-[#F0EEEE] p-5 sm:max-w-[420px] dark:border-none dark:bg-[#25242B]"
      >
        <DialogHeader className="relative">
          <DialogTitle className="text-common-text text-xs font-normal dark:text-white">
            Media File Details
          </DialogTitle>
          <DialogClose asChild className="absolute -top-2 -right-2">
            <button className="rounded p-1 text-white hover:bg-white/20">
              <XIcon
                size={10}
                className="stroke-common-text dark:stroke-[#807575]"
              />
            </button>
          </DialogClose>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-paragraph flex items-center gap-1 text-xs font-normal tracking-[0.144px] dark:text-[#919193]">
                    Tags <CircleAlert className="size-3 rotate-180" />
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={tagOptions}
                      value={field.value || []}
                      onChange={field.onChange}
                      placeholder="Add tags..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-paragraph flex items-center gap-1 text-xs font-normal tracking-[0.144px] dark:text-[#919193]">
                    Description <CircleAlert className="size-3 rotate-180" />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Add a short description"
                      {...field}
                      className="text-common-text min-h-[46px] border border-[#C7C7CC] bg-[#35363B] text-[12px] font-normal tracking-[0.144px] md:text-[10px] dark:border-[#868487] dark:bg-[#25242B] dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recommendedPrice"
              render={({ field }) => (
                <FormItem className="gap-1">
                  <FormLabel className="text-paragraph flex items-center gap-1 text-xs font-normal tracking-[0.144px] dark:text-[#919193]">
                    Recommended Price ($){" "}
                    <CircleAlert className="size-3 rotate-180" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      {...field}
                      className="text-common-text h-[30px] border border-[#C7C7CC] bg-[#35363B] text-[12px] font-normal tracking-[0.144px] md:text-[10px] dark:border-[#868487] dark:bg-[#25242B] dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recommendedPrice"
              render={({ field }) => (
                <FormItem className="mb-1 gap-1.5">
                  <FormLabel className="text-paragraph flex items-center gap-1 text-xs font-normal tracking-[0.144px] dark:text-[#919193]">
                    Attached Scripts
                    <CircleAlert className="size-3 rotate-180" />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                variant="primary"
                disabled={form.formState.isSubmitting}
                className="h-[34px] w-full"
              >
                {form.formState.isSubmitting ? "Updating..." : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
