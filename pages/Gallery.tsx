import React, { useState } from 'react';
import PageShell from '../components/PageShell';

const images = [
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756ded668?q=80&w=2670&auto=format&fit=crop', alt: 'Students in graduation gowns walking together' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop', alt: 'Graduates tossing their caps in the air' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop', alt: 'Students collaborating with laptops in a common area' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop', alt: 'Students in a bright, modern classroom during a lecture' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop', alt: 'A female teacher mentoring a group of students' },
  { src: 'https://images.unsplash.com/photo-1575052814080-384362c3f3a9?q=80&w=2670&auto=format&fit=crop', alt: 'A student playing basketball' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop', alt: 'A team of students working together on a whiteboard' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2c657710065d?q=80&w=2670&auto=format&fit=crop', alt: 'Students working on robotics in a tech lab' },
  { src: 'https://images.unsplash.com/photo-1517057011412-33de3e238350?q=80&w=2670&auto=format&fit=crop', alt: 'A student orchestra performing on stage' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop', alt: 'Younger students raising their hands in a colorful classroom' },
  { src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop', alt: 'A group of happy students sitting together outdoors' },
  { src: 'https://images.unsplash.com/photo-1558125869-7c452a2e41c8?q=80&w=2574&auto=format&fit=crop', alt: 'Close-up of a student painting on a canvas in an art class' },
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