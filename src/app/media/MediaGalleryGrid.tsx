import React, { useState } from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import ImageViewer from "./ImageViewer";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [selected, setSelected] = useState<MediaItem | null>(null);
  if(items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    )
  }
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <MediaGalleryCard
            key={idx}
            image={item.image}
            title={item.title}
            isVideo={item.isVideo}
            onClick={() => !item.isVideo && setSelected(item)}
          />
        ))}
      </div>
      {selected && (
        <ImageViewer
          src={selected.image}
          alt={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default MediaGalleryGrid;