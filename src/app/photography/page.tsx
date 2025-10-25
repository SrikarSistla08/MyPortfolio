"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Geeky Terminal Navigation
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-green-400 font-mono text-sm">
              srikar@portfolio:~$
            </span>
          </Link>
          <Link 
            href="/" 
            className="text-sm font-mono text-green-400 hover:text-white transition-colors"
          >
            {'<'} cd ../
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Photography Gallery with Geeky Interface
const PhotographyGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  
  const photos = [
    { src: "/sec1.jpg", title: "Urban Landscape", category: "street", description: "Capturing the essence of city life" },
    { src: "/sec2.JPG", title: "Architectural Detail", category: "architecture", description: "Modern building structures" },
    { src: "/sec3.jpg", title: "Portrait Study", category: "portrait", description: "Human emotion through the lens" },
    { src: "/sec4.JPG", title: "Nature Scene", category: "nature", description: "Natural beauty in urban settings" },
    { src: "/bc.JPG", title: "Street Photography", category: "street", description: "Candid moments in the city" },
    { src: "/bc2.jpg", title: "Urban Detail", category: "architecture", description: "Geometric patterns in architecture" },
  ];

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "street", name: "Street" },
    { id: "architecture", name: "Architecture" },
    { id: "portrait", name: "Portrait" },
    { id: "nature", name: "Nature" }
  ];

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  return (
    <>
      <section className="pt-20 pb-16 bg-black text-green-400">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="text-sm text-gray-400 mb-4 font-mono">
              <span className="text-yellow-400">$</span> ls -la photography/
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 font-mono">PHOTOGRAPHY</h1>
            <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto">
              Capturing moments, preserving memories, and telling stories through the lens
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg border border-gray-800">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 text-sm font-mono transition-colors duration-300 rounded-md ${
                    filter === category.id
                      ? "bg-green-400 text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group cursor-pointer border border-gray-800 hover:border-green-400 transition-colors duration-200"
                onClick={() => setSelectedImage(photo.src)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="text-xs font-mono text-green-400 mb-1">{photo.category.toUpperCase()}</div>
                    <div className="text-sm font-bold">{photo.title}</div>
                    <div className="text-xs text-gray-300">{photo.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-sm text-gray-400 font-mono">
              <span className="text-yellow-400">$</span> find . -name "*.jpg" | wc -l
            </div>
            <div className="text-green-400 font-mono mt-2">
              {photos.length} photos found
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected photo"
                width={800}
                height={600}
                className="object-contain max-h-[80vh] border border-gray-800"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-green-400 transition-colors font-mono bg-black/50 px-3 py-1 rounded"
              >
                {'>'} close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-black text-green-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-sm font-mono">
          <span className="text-gray-400">$</span> echo "© {new Date().getFullYear()} Srikar Sistla. All rights reserved."
        </div>
      </div>
    </footer>
  );
};

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />
      <PhotographyGallery />
      <Footer />
    </div>
  );
}