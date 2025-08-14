"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageViewerProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt = "", onClose }) => {
  const [open, setOpen] = useState(false);

  // Open animation trigger and disable background scroll
  useEffect(() => {
    const timer = requestAnimationFrame(() => setOpen(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleClose = () => {
    // play close animation then unmount via parent
    setOpen(false);
    // Delay to allow animation to finish
    setTimeout(() => onClose(), 180);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? "" : "pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal content */}
      <div
        className={`relative z-10 mx-4 w-full max-w-5xl transition-all duration-200 ease-out ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close image"
          onClick={handleClose}
          className="absolute -top-10 right-0 text-white/90 hover:text-white transition p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="relative bg-black rounded-lg shadow-xl overflow-hidden">
          <div className="relative w-full h-[70vh] md:h-[75vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain select-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
