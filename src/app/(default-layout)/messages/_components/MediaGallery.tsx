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
      <DialogContent className="h-[70vh] overflow-y-auto p-0 sm:max-w-[1027px]">
        <DialogHeader hidden>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-[18px] bg-[#F0EEEE] p-5">
          {/* Sidebar */}
          <MediaGallerySidebar />

          {/* Main Content */}
          <MediaGalleryContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}
