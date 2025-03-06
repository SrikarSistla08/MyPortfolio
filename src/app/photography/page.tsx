import React from "react";
import Photography from "@/components/MyCreations/photography";
import Footer from "@/components/footer";

export default function PhotographyPage() {
  return (
    <div>
      <Photography />
      <section className="grid grid-rows-[auto_1fr_auto] max-h-screen p-2 gap-8 sm:p-1">
      </section>
      <Footer />
    </div>
  );
}