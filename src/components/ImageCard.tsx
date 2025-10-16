import { useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageCard = ({ src, alt, caption }: ImageCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="my-8 group cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="relative overflow-hidden rounded-xl bg-muted shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
              <ZoomIn className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
            {caption}
          </figcaption>
        )}
      </figure>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCard;
