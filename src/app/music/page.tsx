"use client";
import React from "react";
import { motion } from "framer-motion";
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

// Music Section
const Music = () => {
  return (
    <section className="pt-20 pb-16 bg-black text-green-400">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la music/
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">MUSIC</h1>
          <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto">
            Exploring the intersection of technology and creativity through sound
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center"
        >
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-800 border border-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-mono">COMING SOON</h2>
            <p className="text-gray-300 font-mono leading-relaxed max-w-md mx-auto">
              I&apos;m currently working on some musical projects that blend my technical background with creative expression. 
              Check back soon for updates on my musical journey.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm text-gray-400 font-mono">
              <span className="text-yellow-400">$</span> echo &quot;Interested in collaborating on a musical project?&quot;
            </div>
            <a
              href="mailto:srikarsistla710@gmail.com"
              className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              {'>'} get_in_touch
            </a>
          </div>

          <div className="mt-8 text-xs text-gray-500 font-mono">
            <div className="text-yellow-400 mb-2">$</div>
            <div>{/* Current status: Exploring sound design and digital music production */}</div>
            <div>{/* Tools: Ableton Live, Logic Pro, Python (for audio processing) */}</div>
            <div>{/* Genre interests: Electronic, Ambient, Experimental */}</div>
          </div>
        </motion.div>
      </div>
    </section>
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

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />
      <Music />
      <Footer />
    </div>
  );
}