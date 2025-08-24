
"use client";

import Image from 'next/image';
import { X } from 'lucide-react';

interface ImagePopupProps {
  src: string;
  onClose: () => void;
}

const ImagePopup = ({ src, onClose }: ImagePopupProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in-0"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <Image 
          src={src}
          alt="Popup image"
          width={1200}
          height={800}
          className="object-contain w-full h-full rounded-lg"
          style={{ maxWidth: '90vw', maxHeight: '90vh' }}
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-background rounded-full p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
