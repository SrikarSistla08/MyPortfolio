'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Instafeed from 'instafeed.js';

export default function Photography() {
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: 'IGAAZAa77nYWBFBZAFBOYVFvN3B2bThyWVg3Nm9MRVh3QzRVSFY4VXV5NEFSRjJBc3VSay1BQ3lKTFhhOGNNbG54NHhMTjJKLVdFa004TW04MnJQVUdyczJ6R0J3WW5DSWxJb094blZAvT004a3QxSEZArREZAVU25QSkV0QkNyY3dodwZDZD',
      limit: 12,
      template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
      after: function() {
        // Add any code to run after images are added here
      }
    });
    feed.run();
  }, []);

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12">
        <Link href="/" className="text-2xl font-bold hover:text-stone-500 transition-colors duration-200">
            ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mt-4">My Photography</h1>
      </header>
      <main>
        <p className="mb-9">The perspective towards life keeps changing</p>
        <div id="instafeed" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
        <p className="mt-8 mb-4">Follow me on Instagram for more:</p>
        <a 
          href="https://www.instagram.com/vhs.dawn/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          @vhs.dawn on Instagram
        </a>
      </main>
    </div>
  );
}