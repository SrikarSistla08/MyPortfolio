'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Instafeed from 'instafeed.js';
import tempHeader from '../tempHeader';

export default function Photography() {
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: 'IGAAZAa77nYWBFBZAFBOYVFvN3B2bThyWVg3Nm9MRVh3QzRVSFY4VXV5NEFSRjJBc3VSay1BQ3lKTFhhOGNNbG54NHhMTjJKLVdFa004TW04MnJQVUdyczJ6R0J3WW5DSWxJb094blZAvT004a3QxSEZArREZAVU25QSkV0QkNyY3dodwZDZD',
      limit: 20,
      template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" class="hover:scale-95 transition-transform duration-400" /></a>',
      after: function() {
        // Add any code to run after images are added here
      }
    });
    feed.run();
  }, []);

  return (
    <div className="min-h-screen p-8 sm:p-20 font-old-standard-tt animate-fadeIn">
      <header className="mb-12">
        <Link href="/" className="text-2xl sm:text-3xl font-bold hover:text-stone-500 transition-colors duration-200 abril-fatface-regular">
          {tempHeader()}
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 font-[var(--font-advent-pro)] animate-fadeIn duration-100">My Photography</h1>
      </header>
      <main>
        <p className="mb-9 text-lg sm:text-xl font-[var(--font-advent-pro)] animate-wave-up">The perspective towards life keeps changing</p>
        <div id="instafeed" className="container mb-4 bg-transparent p-4 rounded-lg shadow-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instagram images will be added dynamically */}
        </div>
        <p className="mt-8 mb-4 text-lg sm:text-xl old-standard-tt-regular animate-slide-in-right">Follow me on Instagram for more:</p>
        <a
          href="https://www.instagram.com/vhs.dawn/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg abril-fatface-regular"
        >
          @vhs.dawn on Instagram
        </a>
      </main>
    </div>
  );
}

