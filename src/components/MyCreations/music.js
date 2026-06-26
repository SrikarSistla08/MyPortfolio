"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import tempHeader from '../tempHeader';
import { motion } from 'framer-motion';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          duration: Math.random() * 3 + 2
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const MusicItem = ({ title, description, cover, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="glass-card group overflow-hidden relative"
  >
    <div className="relative aspect-square">
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Listen Now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Music() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      mixBlendMode: "difference"
    }
  };

  const tracks = [
    {
      title: "Track 1",
      description: "A beautiful composition that blends classical and modern elements",
      cover: "/music1.jpg",
      link: "https://open.spotify.com/track/your-track-1"
    },
    {
      title: "Track 2",
      description: "An energetic piece with dynamic rhythms and harmonies",
      cover: "/music2.jpg",
      link: "https://open.spotify.com/track/your-track-2"
    },
    {
      title: "Track 3",
      description: "A soothing melody perfect for relaxation",
      cover: "/music3.jpg",
      link: "https://open.spotify.com/track/your-track-3"
    },
    // Add more tracks as needed
  ];

  return (
    <div className="min-h-screen pt-24 p-8 sm:p-20 font-['rajdhani'] tracking-wide bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
      <StarryBackground />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/90 dark:bg-slate-200/90 backdrop-blur-md rounded-xl overflow-hidden relative z-10"
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
            Music Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-slate-700 mt-4"
          >
            A collection of my musical compositions and productions
          </motion.p>
        </header>
        
        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <MusicItem {...track} />
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
}



