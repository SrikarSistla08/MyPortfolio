"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Geeky Terminal-style Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const updateTime = () => setCurrentTime(new Date().toLocaleTimeString());
    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ opacity: 0.8 }}
            className="flex items-center space-x-3"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-green-400 font-mono text-sm">
              srikar@portfolio:~$
            </span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {mounted && (
              <div className="text-green-400 font-mono text-xs">
                {currentTime}
              </div>
            )}
            <div className="flex space-x-6 text-sm font-mono">
              <a href="#work" className="text-green-400 hover:text-white transition-colors group">
                ./work
                <span className="text-xs text-gray-500 ml-1 group-hover:text-gray-400">(6 repos)</span>
              </a>
              <a href="#about" className="text-green-400 hover:text-white transition-colors group">
                ./about
                <span className="text-xs text-gray-500 ml-1 group-hover:text-gray-400">(story)</span>
              </a>
              <a href="#contact" className="text-green-400 hover:text-white transition-colors group">
                ./contact
                <span className="text-xs text-gray-500 ml-1 group-hover:text-gray-400">(ping me)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Typing Animation Component
const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Photographer",
    "Developer", 
    "Business Analyst"
  ];
  
  const currentRole = roles[currentIndex];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentRole, isDeleting]);
  
  return (
    <span className="text-lg text-green-400 mb-6">
      <span className="text-gray-400">//</span> {currentText}
      <span className="animate-terminal-blink">|</span>
    </span>
  );
};

// Matrix-style Code Rain Effect
const CodeRain = () => {
  const [drops, setDrops] = useState<Array<{id: number, x: number, speed: number, text: string}>>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const characters = "01";
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      speed: Math.random() * 3 + 1,
      text: characters[Math.floor(Math.random() * characters.length)]
    }));
    setDrops(newDrops);
  }, []);
  
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-green-400/20 font-mono text-xs"
          style={{ left: `${drop.x}%` }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: drop.speed,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          {drop.text}
        </motion.div>
      ))}
    </div>
  );
};

// Floating Terminal Commands
const FloatingCommands = () => {
  const commands = [
    "npm install creativity",
    "git commit -m 'capture moment'",
    "python analyze_data.py",
    "ls -la projects/",
    "cat portfolio.txt"
  ];
  
  // Fixed positions to avoid hydration mismatch
  const positions = [
    { left: "15%", top: "25%" },
    { left: "75%", top: "35%" },
    { left: "25%", top: "55%" },
    { left: "65%", top: "65%" },
    { left: "45%", top: "45%" }
  ];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {commands.map((command, index) => (
      <motion.div
          key={index}
          className="absolute text-green-400/10 font-mono text-xs"
        style={{
            left: positions[index].left,
            top: positions[index].top
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.8
          }}
        >
          {command}
        </motion.div>
      ))}
    </div>
  );
};

// Geeky Hero Section
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <Image
          src="/Ph1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>


      {/* Matrix-style Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Terminal-style Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-left text-green-400 max-w-4xl mx-auto px-6 font-mono">
        <motion.div
              initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4"
        >
            <div className="text-sm text-gray-400 mb-4">
              <span className="text-yellow-400">$</span> whoami
            </div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-2"
          >
            Srikar Sistla
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TypingAnimation />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-sm text-gray-300 space-y-3 font-mono"
          >
              <div className="flex items-center">
                <span className="text-green-400 mr-2">❯</span>
                <span className="text-gray-400">// Available for collaboration</span>
                <span className="text-green-400 ml-2">●</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="text-green-400 mr-2">❯</span>
                <span>Last commit: <span className="text-green-400">"captured golden hour in Baltimore"</span></span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="text-green-400 mr-2">❯</span>
                <span>Currently: <span className="text-blue-400">debugging life</span> | <span className="text-purple-400">optimizing creativity</span></span>
              </div>
            </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-start mt-8"
            >
              <div className="w-8 h-8 border border-green-400 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 bg-green-400 rounded-full"
                />
              </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

// Projects Showcase with Real Data
const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Post-Pandemic MTA Ridership Analysis",
      description: "Comprehensive data-driven analysis of NYC MTA ridership recovery post-COVID with forecasting models using SQL, Power BI, and DAX",
      technologies: ["SQL", "Power BI", "DAX", "Data Analysis", "Forecasting"],
      category: "Data Analysis",
      link: "https://github.com/SrikarSistla08/Post-Pandemic-MTA-Ridership-A-Data-Driven-Gap-Analysis-Forecasting",
      image: "/Projects/MTA.JPG",
      status: "Completed"
    },
    {
      id: 2,
      title: "UG Admin Dashboard",
      description: "Full-stack admin dashboard for student management with Firebase integration, real-time data, and comprehensive analytics",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React"],
      category: "Web Development",
      link: "https://github.com/SrikarSistla08/ug-admin-dashboard",
      image: "/Projects/UG ADMIN.JPG",
      status: "Completed"
    },
    {
      id: 3,
      title: "Drug-Induced Auto-Immunity Prediction",
      description: "Ensemble machine learning model for predicting drug-induced auto-immunity using advanced ML algorithms",
      technologies: ["Python", "Machine Learning", "Ensemble Methods", "Scikit-learn", "Pandas"],
      category: "Machine Learning",
      link: "https://github.com/SrikarSistla08/Prediction-of-Drug-Induced-Auto-Immunity-Using-Ensemble-Machine-Learning",
      image: "/Projects/DRG.JPG",
      status: "Research"
    },
    {
      id: 4,
      title: "Farmer Basket E-Commerce",
      description: "Full-stack e-commerce platform for farmers to sell produce directly to consumers with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      category: "Web Development/ StartUp",
      link: "https://github.com/SrikarSistla08/farmer-basket",
      video: "/Projects/FB.mp4",
      status: "Completed",
      autoplay: true,
      loop: true,
      muted: true
    },
    {
      id: 5,
      title: "Diabetes Prediction Using SVM",
      description: "Machine learning model using Support Vector Machine to predict diabetes with 80% accuracy. Published research paper",
      technologies: ["Python", "SVM", "Scikit-learn", "Pandas", "NumPy"],
      category: "Machine Learning",
      link: "https://github.com/SrikarSistla08/Predicting-Diabetes-Using-SVM",
      image: "/Projects/SVM.JPG",
      status: "Published"
    },
    {
      id: 6,
      title: "Revenue Case Study",
      description: "Comprehensive business case study analyzing revenue optimization strategies and market trends",
      technologies: ["Data Analysis", "Business Intelligence", "Excel", "Power BI", "Statistics"],
      category: "Business Analysis",
      link: "https://github.com/SrikarSistla08/Case-Study-on-Revenue",
      image: "/Projects/ECOM.JPG",
      status: "Completed"
    }
  ];

  return (
    <section id="work" className="py-20 bg-black text-green-400">
      <div className="max-w-7xl mx-auto px-6">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la projects/
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">PROJECTS</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer border border-gray-800 hover:border-green-400 transition-colors duration-200 block"
            >
              <div className="relative h-64 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay={project.autoplay}
                    loop={project.loop}
                    muted={project.muted}
                    playsInline
                    className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 font-mono">No preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="text-xs font-mono text-green-400 mb-1">{project.category}</div>
                  <div className="text-sm font-bold">{project.title}</div>
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-400/20 text-green-400 text-xs font-mono rounded border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-green-400 group-hover:text-white transition-colors font-mono">
                    {'>'} view repo
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
// Photography Gallery with Envelope/Dropdown
const PhotographyGallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  
  const fullText = "Click to view gallery";
  
  // Typing animation effect
  useEffect(() => {
    if (!isExpanded) {
      const timer = setTimeout(() => {
        if (typingIndex < fullText.length) {
          setTypingText(fullText.slice(0, typingIndex + 1));
          setTypingIndex(typingIndex + 1);
        } else {
          // Reset after a pause
          setTimeout(() => {
            setTypingText("");
            setTypingIndex(0);
          }, 2000);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [typingIndex, isExpanded, fullText]);

  // Navigation functions
  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };
  
  const photos = [
    { src: "/sec1.jpg", title: "Golden Hour Reflections", category: "Street" },
    { src: "/sec2.JPG", title: "Cathedral of Light", category: "Architecture" },
    { src: "/sec3.jpg", title: "Intimate Portrait", category: "Portrait" },
    { src: "/sec4.JPG", title: "Serene Waters", category: "Nature" },
    { src: "/sec5.jpg", title: "Urban Pulse", category: "Street" },
    { src: "/sec6.jpg", title: "Geometric Harmony", category: "Architecture" },
    { src: "/sec7.jpg", title: "Chid's Play", category: "Nature" },
    { src: "/sec8.jpg", title: "Street Stories", category: "Street" },
    { src: "/sec9.jpg", title: "City Rhythms", category: "Architecture" },
    { src: "/sec10.jpg", title: "Modern Lines", category: "Architecture" },
    { src: "/bc.JPG", title: "Sunset Serenity", category: "Nature" },
    { src: "/bc2.jpg", title: "Air Borne", category: "Nature" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-green-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la photography/
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">PHOTOGRAPHY</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        {/* Envelope/Dropdown Container */}
        <div className="relative">
          {/* Envelope Header - Clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-gray-700 rounded-lg bg-black/80 backdrop-blur-sm overflow-hidden cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Envelope Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 font-mono text-sm ml-4">photography_portfolio</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 font-mono text-sm">{photos.length} photos</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-400"
                >
                  ▼
                </motion.div>
              </div>
            </div>

            {/* Envelope Content Preview */}
            <div className="p-6">
              <div className="text-green-400 font-mono text-sm mb-4">
                <span className="text-yellow-400">$</span> cat photography_portfolio.txt
              </div>
              <div className="text-gray-300 font-mono text-sm space-y-1">
                <div>📸 Collection: {photos.length} photographs</div>
                <div>📁 Categories: Street, Architecture, Portrait, Nature</div>
                <div>🎨 Style: Black & white with color reveal on hover</div>
                <div className="text-gray-500 mt-2">
                  {isExpanded ? 'Click to minimize' : (
                    <span className="font-mono">
                      {typingText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-green-400"
                      >
                        |
                      </motion.span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dropdown Gallery */}
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              y: isExpanded ? 0 : -20
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div 
              className="border border-gray-700 rounded-lg bg-black/60 backdrop-blur-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Gallery Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/30 border-b border-gray-700">
                <div className="text-gray-400 font-mono text-sm">gallery_view.exe</div>
                <div className="text-gray-500 font-mono text-xs">Loading {photos.length} images...</div>
              </div>
              
              <div className="p-6">
                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: isExpanded ? 1 : 0, 
                        y: isExpanded ? 0 : 30
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handlePhotoClick(photo, index)}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-gray-800 hover:border-green-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/20">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-102 grayscale group-hover:grayscale-0"
                        />
                        
                        {/* Minimal Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                          <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-sm font-bold mb-1">{photo.title}</h3>
                            <div className="text-xs text-green-400 font-mono">{photo.category}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isExpanded ? 1 : 0, 
                    y: isExpanded ? 0 : 20 
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center mt-12"
                >
                  <div className="text-sm text-gray-400 font-mono mb-2">
                    <span className="text-yellow-400">$</span> echo "Capturing moments, one frame at a time"
                  </div>
                  <motion.div 
                    className="text-xs text-gray-500 font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-green-400">$</span> find . -name "*.jpg" | wc -l && echo "stories captured"
                  </motion.div>
                </motion.div>
              </div>
          </motion.div>
        </motion.div>
      </div>

        {/* Image Viewer Modal */}
        {selectedPhoto && (
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
      <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Window Header with Traffic Lights */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer flex-shrink-0"
                    title="Close"
                  ></button>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                </div>
                <div className="text-gray-400 font-mono text-sm">image_viewer.exe</div>
              </div>
              
              <div className="relative">
                <Image
                  src={photos[currentPhotoIndex].src}
                  alt={photos[currentPhotoIndex].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPreviousPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300"
                  title="Previous photo"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300"
                  title="Next photo"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
                </button>
                
                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{photos[currentPhotoIndex].title}</h3>
                  <p className="text-green-400 font-mono">{photos[currentPhotoIndex].category}</p>
                </div>
                
                {/* Photo Counter */}
                <div className="absolute bottom-4 right-4 text-white bg-black/50 px-3 py-1 rounded-full border border-gray-600">
                  <span className="text-sm font-mono">
                    {currentPhotoIndex + 1} / {photos.length}
                  </span>
                </div>
              </div>
            </motion.div>
      </motion.div>
        )}
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat about.txt
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">ABOUT</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative h-96 border border-gray-800"
          >
            <Image
              src="/Profile.jpg"
              alt="Srikar Sistla"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-6 font-mono"
          >
            <div className="text-sm text-gray-400">
              <span className="text-yellow-400">//</span> Professional Summary
            </div>
            <p className="text-gray-300 leading-relaxed">
              I'm a multidisciplinary professional who finds beauty in both code and photography. 
              As a software developer, I build digital solutions that matter. As a business analyst, 
              I turn data into insights. And as a photographer, I capture the world's stories.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Based in Maryland, I believe in the power of clean code, clean design, and clean photography. 
              Every project is an opportunity to create something meaningful.
            </p>
            <div className="space-y-2 text-sm">
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">education</span> = <span className="text-green-400">"UMBC Information Systems"</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">experience</span> = <span className="text-green-400">"Software Engineer @ TANTVSTUDIOS"</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">location</span> = <span className="text-green-400">"Halethorpe, MD"</span>;</div>
            </div>
            <div className="pt-4">
              <a
                href="/Resume.pdf"
                className="inline-block border border-green-400 px-6 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
              >
                {'>'} download_resume.pdf
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Achievements Section
const AchievementsSection = () => {
  const achievements = [
    {
      title: "Published Research",
      description: "Diabetes Prediction using SVM - IJSCE Journal",
      icon: "📚",
      color: "text-blue-400"
    },
    {
      title: "Data Analysis Expert",
      description: "MTA Ridership Analysis with Power BI",
      icon: "📊",
      color: "text-green-400"
    },
    {
      title: "Full-Stack Developer",
      description: "Multiple web applications deployed",
      icon: "💻",
      color: "text-purple-400"
    },
    {
      title: "Photography Portfolio",
      description: "Capturing moments across Maryland",
      icon: "📸",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la achievements/
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">ACHIEVEMENTS</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 transition-colors duration-200 text-center"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">{achievement.title}</h3>
              <p className="text-sm text-gray-300 font-mono">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-green-400">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> contact --help
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">CONTACT</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-300 font-mono">
            Ready to collaborate or just want to say hello?
          </p>
          <div className="flex justify-center space-x-8 text-sm font-mono">
            <a
              href="mailto:srikarsistla710@gmail.com"
              className="text-green-400 hover:text-white transition-colors"
            >
              {'>'} srikarsistla710@gmail.com
            </a>
            <a
              href="https://github.com/SrikarSistla08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              {'>'} github.com/SrikarSistla08
            </a>
            <a
              href="https://www.linkedin.com/in/srikarsistla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              {'>'} linkedin.com/in/srikarsistla
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="py-8 bg-black text-green-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-sm font-mono">
          <span className="text-gray-400">$</span> echo "© {mounted ? new Date().getFullYear() : '2024'} Srikar Sistla. All rights reserved."
        </div>
        <div className="text-xs text-gray-500 font-mono mt-2">
          <span className="text-yellow-400">$</span> uptime
        </div>
        <div className="text-gray-400 font-mono text-xs mt-1">
          Running on <span className="text-green-400">Next.js</span> | Built with <span className="text-blue-400">love</span> and <span className="text-purple-400">coffee</span>
        </div>
      </div>
    </footer>
  );
};

// Skills Section with Interactive Elements
const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90, color: "text-blue-400" },
    { name: "Python", level: 85, color: "text-yellow-400" },
    { name: "Power BI", level: 80, color: "text-orange-400" },
    { name: "Photography", level: 95, color: "text-purple-400" },
    { name: "Data Analysis", level: 88, color: "text-green-400" },
    { name: "Machine Learning", level: 75, color: "text-red-400" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-green-400">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat skills.txt
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">SKILLS</h2>
          <div className="w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black border border-gray-800 p-6 rounded-lg hover:border-green-400 transition-colors duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-white">{skill.name}</span>
                <span className={`font-mono text-sm ${skill.color}`}>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-2 rounded-full bg-gradient-to-r from-green-400 to-green-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />
        <Hero />
                <About />
                <ProjectsShowcase />
      <PhotographyGallery />
                <Contact />
        <Footer />
      </div>
  );
}
