"use client";
import React, { useRef, useEffect } from "react";
import Photography from "@/components/MyCreations/photography";
import Footer from "@/components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroPh=() => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Slight zoom out
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // Moves up slightly

  return (
    <motion.div
            className="absolute inset-1 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Ph1.JPG')",
              scale,
              y,
              opacity,
              maskImage: "linear-gradient(to bottom, rgb(0, 0, 0), rgba(0,0,0,0))",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          />
  );
}
// const scrollHor=() => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );
//     return () => {
//       {/* A return function for killing the animation on component unmount */ }
//       pin.kill();
//     };
//   }, []);
// };

export default function PhotographyPage() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);
  return (
    <div>
      <section>
        <div>
          <HeroPh />
        </div>
      </section>
      <section className="scroll-section-outer">
      <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section font-2xl">
              <h3 className="font-['rajdhani'] text-2xl sm:text-3xl"></h3>
            </div>
            <div className="scroll-section">
              <img src={"/sec1.jpg"} className="h-full w-full object-cover" alt="Section 2" />
            </div>
            <div className="scroll-section">
              <img src={"/sec2.jpg"} className="h-full w-full object-cover" alt="Section 3" />
            </div>
            <div className="scroll-section">
              <img
              src={"/sec3.jpg"}
              className="h-full w-full object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              }}
              alt="Section 4"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="grid grid-rows-auto mt-10 p-2 gap-4 sm:p-1"
        style={{
          maskImage: "linear-gradient(to top, rgb(53, 53, 53), rgba(0, 0, 0, 0))",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      >
        <div>
        <Photography />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

