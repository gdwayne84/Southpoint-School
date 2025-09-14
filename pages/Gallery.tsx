import React, { useState } from 'react';
import PageShell from '../components/PageShell';

const images = [
  { src: 'images/spsrandom3.jpg', alt: 'students in the gymnasium' },
  { src: 'images/spsrandom11.jpg', alt: 'student council miting de avance gymnasium' },
  { src: 'images/spsrandom13.jpg', alt: 'preschool students field playing' },
  { src: 'images/spsrandom15.jpg', alt: 'student explaining nutrition month'  },
  { src: 'images/spsrandom18.jpg', alt: 'teachers posing gymnasium' },
  { src: 'images/spsrandom46.jpg', alt: 'senior high school maa nccc' },
  { src: 'images/spsrandom25.jpg', alt: 'buwan ng wika preschool class picture' },
  { src: 'images/spsrandom38.jpg', alt: 'high school students teacher posing nutrition month' },
  { src: 'images/spsrandom7.jpg', alt: 'teachers principal posing gymnasium' },
  { src: 'images/spsrandom51.jpg', alt: 'southpoint school grounds' },
  { src: 'images/spsrandom2.jpg', alt: 'students with principal gymnasium lecture' },
  { src: 'images/spsrandom10.jpg', alt: 'student council with adviser gymnasium' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageShell title="School Gallery">
      <p className="mb-12 text-xl max-w-4xl text-gray-600">
        A glimpse into the vibrant life at Southpoint School. Explore our facilities, events, and the everyday moments that make our community special.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover aspect-video transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
        >
            <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-[110]"
                aria-label="Close image view"
            >
                &times;
            </button>
            <img
                src={selectedImage}
                alt="Selected gallery"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            />
        </div>
      )}
    </PageShell>
  );
};

export default Gallery;
