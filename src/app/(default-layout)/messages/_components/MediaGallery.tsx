"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MediaGalleryContent from "./MediaGalleryContent";
import MediaGallerySidebar from "./MediaGallerySidebar";
export default function MediaGallery() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="unlock-btn-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          Unlock for $102
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="h-[70vh] overflow-y-auto rounded-[20px] border-none p-0 sm:max-w-[1027px]"
      >
        <DialogHeader hidden>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 bg-[#F0EEEE] p-3 sm:p-5 md:flex-row md:gap-[18px] dark:bg-[#131215]">
          {/* Sidebar */}
          <MediaGallerySidebar />

          {/* Main Content */}
          <MediaGalleryContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}
