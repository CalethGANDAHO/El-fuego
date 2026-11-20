import React, { useState } from 'react';
import { galleryImages } from '../data/galleryData';
import { X, ZoomIn } from 'lucide-react';

export default function AtmosphereGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galerie" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">L'Atmosphère</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Galerie Ambiance</h2>
        <p className="mt-3 text-muted-foreground text-base">
          Terrasse en bois chaleureusement illuminée le soir, salle climatisée et comptoir à cocktails.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {galleryImages.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border cursor-pointer lift"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <ZoomIn className="size-8 text-primary drop-shadow" />
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40"
          >
            <X className="size-6" />
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
