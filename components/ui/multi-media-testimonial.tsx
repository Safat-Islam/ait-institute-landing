"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

// Compatible Image component for Vite React
const Image = ({
  src,
  alt = "",
  fill,
  className = "",
  ...props
}: {
  src?: string;
  alt?: string;
  fill?: boolean;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src={src}
    alt={alt}
    className={`${fill ? "absolute inset-0 w-full h-full object-cover" : ""} ${className}`}
    loading="lazy"
    {...props}
  />
);

export interface Testimonial {
  type?: string;
  rating?: number;
  name: string;
  designation: string;
  title?: string;
  profile?: string;
  content: string;
  mediaUrl?: string;
  thumbnail?: string;
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial?: Testimonial;
}) {
  const [hydrated, setHydrated] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = React.useState(false);

  // Run once on mount
  React.useEffect(() => setHydrated(true), []);

  // Control video playback
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [open]);

  // Guard missing data (no conditional hook calls!)
  if (!testimonial) {
    return (
      <Card className="border border-border shadow-sm bg-background">
        <CardContent className="p-6 text-center text-muted-foreground">
          Loading testimonial...
        </CardContent>
      </Card>
    );
  }

  const {
    name = "Anonymous",
    profile = "",
    title = "",
    designation = "Customer",
    content = "No testimonial available.",
    mediaUrl,
    thumbnail,
  } = testimonial;

  // render skeleton until hydrated
  if (!hydrated) {
    return (
      <Card className="border border-border shadow-sm bg-background">
        <CardContent className="p-6 text-center text-muted-foreground">
          Loading...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="break-inside-avoid border p-4 rounded-3xl my-4 border-slate-800 bg-slate-900/80 text-white shadow-lg hover:shadow-xl hover:border-purple-500/40 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-100">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-0 mt-3 space-y-4">
        <ScrollArea className="max-h-[500px] rounded-md">
          <div className="space-y-4">
            {/* --- Video Section --- */}
            {mediaUrl && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative w-full cursor-pointer group outline-none"
                    aria-label="Play testimonial video"
                    onClick={() => setOpen(true)}
                  >
                    <AspectRatio
                      ratio={16 / 9}
                      className="overflow-hidden rounded-xl border border-slate-800"
                    >
                      <Image
                        src={thumbnail || mediaUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"}
                        alt={name}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3.5 backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-white drop-shadow" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {open && (
                  <DialogContent
                    className="sm:max-w-5xl w-full p-0 overflow-hidden bg-black text-white border-0"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 z-50 rounded-full text-white hover:bg-white/10"
                        aria-label="Close video"
                        onClick={() => setOpen(false)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </DialogClose>

                    <AspectRatio ratio={16 / 9} className="bg-black">
                      <video
                        ref={videoRef}
                        controls
                        playsInline
                        preload="metadata"
                        poster={thumbnail}
                        className="h-full w-full"
                      >
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </AspectRatio>
                  </DialogContent>
                )}
              </Dialog>
            )}

            {/* --- Image Section --- */}
            {!mediaUrl && thumbnail && (
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-xl border border-slate-800 relative"
              >
                <Image
                  src={thumbnail}
                  alt={name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
            )}

            {/* --- Text Section --- */}
            {content && (
              <p className="text-slate-300 text-sm leading-relaxed">{content}</p>
            )}
          </div>
        </ScrollArea>

        <Separator className="bg-slate-800" />

        {/* --- Profile Section --- */}
        <div className="flex items-center space-x-3 pt-2">
          <Avatar className="h-10 w-10 ring-1 ring-purple-500/30">
            <AvatarImage src={profile} />
            <AvatarFallback className="bg-purple-900 text-white font-bold">{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-slate-100">{name}</p>
            <p className="text-xs text-slate-400">{designation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
