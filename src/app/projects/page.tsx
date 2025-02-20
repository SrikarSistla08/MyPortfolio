import React from "react";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div>
      <Projects />
      <section className="grid grid-rows-[auto_1fr_auto] max-h-screen p-2 gap-8 sm:p-1">
        <Footer />
      </section>
    </div>
  );
}