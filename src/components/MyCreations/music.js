import React from 'react';
import Link from 'next/link';
import tempHeader from '../tempHeader';

export default function Music() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-['rajdhani'] tracking-wide bg-gradient-to-br from-slate-900 to-black">
      <header className="mb-12 experience-container">
        <Link href="/" className="text-2xl font-bold hover:text-stone-500 transition-colors duration-200">
          {tempHeader()}
        </Link>
        <h1 className="text-4xl font-bold mt-4">Music lives within us</h1>
      </header>
      <main>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My Spotify</h2>
          <p className="mb-8">Listen to my productions on Spotify:</p>
          <div className="mb-8">
            <iframe
              src="https://open.spotify.com/embed/artist/3u4Jjny8TUZkmRXh49BbwF"
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <a
            href="https://open.spotify.com/artist/3u4Jjny8TUZkmRXh49BbwF?si=Q-wJmGyGT2mm4s4Cf3Ys6g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Visit My Spotify Page
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My YouTube</h2>
          <p className="mb-8">Check out some of my YouTube content:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xiAR5UlySsk"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/rt_eymsku00?si=aAi0iZTADvSgwpjn"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@UNIQUEPILOT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
          >
            Visit My YouTube Channel
          </a>
        </section>
      </main>
    </div>
  );
}



