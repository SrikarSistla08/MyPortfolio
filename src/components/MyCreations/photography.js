"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import tempHeader from '../tempHeader';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoWall = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 right-0 p-4 text-white"
            >
              <h3 className="text-lg font-bold">{photo.title}</h3>
              <p className="text-sm opacity-90">{photo.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-xl">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-200">{selectedPhoto.description}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Photography() {
  const photos = [
    {
      src: '/sec1.jpg',
      title: 'Nature\'s Beauty',
      description: 'Capturing the serene moments in nature'
    },
    {
      src: '/sec2.JPG',
      title: 'Urban Landscapes',
      description: 'The beauty of city architecture'
    },
    {
      src: '/sec3.jpg',
      title: 'Portrait Photography',
      description: 'Telling stories through faces'
    },
    {
      src: '/bc.JPG',
      title: 'Scenic Views',
      description: 'Breathtaking landscapes'
    },
    // Add more photos here with the same structure
  ];

  return (
    <div className="min-h-screen pt-24 p-8 sm:p-20 font-['rajdhani'] tracking-wide bg-gradient-to-br from-slate-900 to-black">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/90 dark:bg-slate-200/90 backdrop-blur-md rounded-xl overflow-hidden"
      >
        <header className="p-8">
          <Link href="/" className="text-2xl font-bold text-slate-100 dark:text-slate-900 hover:text-blue-400 transition-colors duration-200">
            {tempHeader()}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mt-4 text-slate-100 dark:text-slate-900"
          >
            Photography Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-slate-700 mt-4"
          >
            A collection of moments captured through my lens
          </motion.p>
        </header>
        
        <main>
          <PhotoWall photos={photos} />
        </main>
      </motion.div>
    </div>
  );
}

