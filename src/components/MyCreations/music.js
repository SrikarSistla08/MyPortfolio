import React from 'react';
import Link from 'next/link';
import tempHeader from '../tempHeader';

export default function Music() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-italiana tracking-wide">
      <header className="mb-12 experience-container">
        <Link href="/" className="text-2xl font-bold hover:text-stone-500 transition-colors duration-200">
          {tempHeader()}
        </Link>
        <h1 className="text-4xl font-bold mt-4">My Music</h1>
      </header>
      <main>
        <p className="mb-8">Listen to my music on Spotify:</p>
        <a
          href="https://open.spotify.com/artist/3u4Jjny8TUZkmRXh49BbwF?si=Q-wJmGyGT2mm4s4Cf3Ys6g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
        >
          My Spotify Page
        </a>
      </main>
    </div>
  );
}