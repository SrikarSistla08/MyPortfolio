import React from "react";
import Music from "@/components/MyCreations/music";
import Footer from "@/components/footer";

export default function MusicPage() {
  return (
    <div>
      <Music />
      <section className="grid grid-rows-[auto_1fr_auto] max-h-screen p-2 gap-8 sm:p-1 font-italiana tracking-wide">
      </section>
      <Footer />
    </div>
  );
}