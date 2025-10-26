
import React from 'react';

interface GalleryProps {
  images: string[];
  onImageClick: (imageUrl: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay={(index % 4) * 100}
            onClick={() => onImageClick(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
