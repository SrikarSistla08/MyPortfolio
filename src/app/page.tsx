"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Clean Minimal Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = useMemo(() => [
    { href: "#about", label: "about" },
    { href: "#experience", label: "experience" },
    { href: "#work", label: "work" },
    { href: "#awards", label: "awards" },
    { href: "#contact", label: "contact" },
  ], []);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => ({
        id: link.href.replace("#", ""),
        el: document.getElementById(link.href.replace("#", ""))
      })).filter(s => s.el);
      
      const scrollPos = window.scrollY + 120;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el && section.el.offsetTop <= scrollPos) {
          setActiveSection(section.href || `#${section.id}`);
          break;
        }
      }
      
      // If at top, set first section
      if (window.scrollY < 200 && sections.length > 0) {
        setActiveSection("");
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-green-400 font-mono text-sm font-bold hover:text-white transition-colors cursor-pointer">
            Srikar
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-green-400 hover:text-white transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
      <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block transition-colors font-mono text-sm py-2 ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
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
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 60);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentRole, isDeleting]);
  
  return (
    <span className="text-lg text-green-400 mb-6">
      <span className="text-gray-400">{"//"}</span> {currentText}
      <span className="animate-terminal-blink">|</span>
    </span>
  );
};


// Geeky Hero Section
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <Image
          src="/Ph1.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center object-top sm:object-center md:object-center lg:object-center hero-bg-mobile"
          priority
          quality={85}
        />
      </motion.div>


      {/* Matrix-style Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Terminal-style Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-left text-green-400 max-w-4xl mx-auto px-4 sm:px-6 font-mono pt-16 sm:pt-0">
        <motion.div
              initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3 sm:space-y-4"
        >
            <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              <span className="text-yellow-400">$</span> whoami
            </div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight"
          >
            Srikar Sistla
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <TypingAnimation />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="text-xs sm:text-sm text-gray-300 space-y-2 sm:space-y-3 font-mono"
          >
              <div className="flex items-center flex-wrap">
                <span className="text-green-400 mr-2">❯</span>
                <span className="text-gray-400">{"// Available for collaboration"}</span>
                <span className="text-green-400 ml-2">●</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 flex-wrap">
                <span className="text-green-400 mr-2">❯</span>
                <span>Last commit: <span className="text-green-400">&quot;captured golden hour in Baltimore&quot;</span></span>
              </div>
              <div className="flex items-center text-xs text-gray-500 flex-wrap">
                <span className="text-green-400 mr-2">❯</span>
                <span>Currently: <span className="text-blue-400">debugging life</span> | <span className="text-purple-400">optimizing creativity</span></span>
              </div>
            </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="flex justify-start mt-6 sm:mt-8 flex-wrap gap-3"
            >
              <a
                href="/Resume.pdf"
                className="inline-block border border-green-400 px-6 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
              >
                {'>'} download_resume.pdf
              </a>
              <a
                href="#work"
                className="inline-block border border-green-400 px-6 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
              >
                {'>'} view_my_work
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-600 px-6 py-3 text-sm font-mono text-gray-400 hover:border-green-400 hover:text-green-400 transition-colors duration-300"
              >
                {'>'} contact_me
              </a>
            </motion.div>
            <EasterEggTerminal />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

// Easter Egg Terminal
const EasterEggTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [showTerminal, setShowTerminal] = useState(false);

  const commands: Record<string, string> = {
    'help': 'Available commands: help, skills, projects, contact, secret, clear',
    'skills': 'Python, JavaScript, TypeScript, React, Next.js, Node.js, AWS, SQL, Power BI',
    'projects': '11 repos on GitHub | Data Analysis, Web Dev, ML, Startups',
    'contact': 'Email: Srikarsistla710@gmail.com | LinkedIn: /in/srikarsistla',
    'secret': '🕷️ You found the easter egg! I\'m a Spider-Man fan. With great power comes great responsibility.',
    'clear': '__CLEAR__',
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const response = commands[trimmed] || `Command not found: ${trimmed}. Type "help" for available commands.`;
    
    if (response === '__CLEAR__') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, response]);
    }
    setInput('');
  };

  if (!showTerminal) {
    return (
      <button
        onClick={() => setShowTerminal(true)}
        className="text-xs text-gray-600 hover:text-gray-400 font-mono mt-4 transition-colors"
      >
        {'$'} hint: try typing something...
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mt-4 border border-gray-800 bg-gray-900/50 p-3 max-w-md"
    >
      <div className="text-xs text-gray-500 mb-2 font-mono">Type "help" for commands</div>
      <div className="h-32 overflow-y-auto mb-2 font-mono text-xs">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-400'}>
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center font-mono text-xs">
        <span className="text-yellow-400 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && input.trim()) {
              handleCommand(input);
            }
          }}
          className="flex-1 bg-transparent outline-none text-green-400"
          placeholder="type a command..."
          autoFocus
        />
      </div>
    </motion.div>
  );
};
const Experience = () => {
  const experiences = [
    {
      role: "Technical Grant Writer",
      company: "Valhalla Data Systems, Inc.",
      location: "Clarksburg, MD",
      period: "May 2026 – Present",
      status: "current",
      type: "Contract",
      description: [
        "Research and analyze federal, state, and private grant opportunities using data-driven methodologies to assess alignment with organizational technology objectives",
        "Build Power BI dashboards with DAX measures and Power Query ETL to track grant pipeline performance and funding trend analysis for CEO review",
        "Draft technical grant proposals for universities addressing funder compliance requirements and technology deliverables"
      ],
      technologies: ["Power BI", "DAX", "Power Query", "ETL", "Data Analysis"]
    },
    {
      role: "Software Developer & Project Coordinator",
      company: "UnderGraduation.com",
      location: "Boston, MA",
      period: "Oct 2025 – Dec 2025",
      status: "completed",
      type: "Part-Time",
      description: [
        "Appointed Technical Lead for 4-member engineering team; architected and deployed scalable student success platform serving 10+ universities using React and Node.js",
        "Developed RESTful APIs for user authentication (JWT-based) and user tracking endpoints monitoring platform engagement metrics and ROI",
        "Built interactive Power BI dashboards using DAX calculated measures tracking user acquisition, session metrics, and platform ROI",
        "Directed sprint planning, backlog grooming, and code reviews via JIRA; authored user stories and acceptance criteria for 15+ production features",
        "Reduced frontend page load times by 35% through React component optimization and backend API response latency by 28% via Node.js query tuning"
      ],
      technologies: ["React", "Node.js", "REST API", "JWT", "Power BI", "JIRA", "DAX"]
    },
    {
      role: "Teaching Assistant — IS 620 Advanced Database Projects",
      company: "University of Maryland, Baltimore County",
      location: "Baltimore, MD",
      period: "Aug 2025 – Dec 2025",
      status: "completed",
      type: "Part-Time",
      description: [
        "Instructed graduate students in SQL, database design, normalization, and query optimization using MySQL and Oracle",
        "Developed lab assignments and graded projects covering ETL concepts, relational database modeling, and business analytics",
        "Supported students with hands-on debugging of SQL queries, schema design, and real-world analytics applications"
      ],
      technologies: ["SQL", "MySQL", "Oracle", "ETL", "Database Design"]
    },
    {
      role: "Software Developer (Analytics & Full-Stack)",
      company: "TANTV Studios",
      location: "Washington, DC",
      period: "Oct 2024 – May 2025",
      status: "completed",
      type: "Full-Time",
      description: [
        "Developed Python automation scripts to extract, transform, and load (ETL) media analytics data from multiple APIs into a centralized reporting pipeline — reducing manual reporting time by 35%",
        "Built and deployed analytics dashboards in Power BI tracking content performance KPIs, audience engagement metrics, and campaign efficiency across multiple markets",
        "Enhanced TANTV's website through backend optimizations and UI/UX improvements using JavaScript and CSS — increasing session duration by 25%",
        "Implemented data validation scripts in Python (Pandas) that reduced data entry errors by 40% across reporting workflows"
      ],
      technologies: ["Python", "Power BI", "ETL", "Pandas", "JavaScript", "CSS", "REST API"]
    },
    {
      role: "Systems & Process Analyst",
      company: "UMBC — Student Disability Services",
      location: "Baltimore, MD",
      period: "Aug 2024 – Aug 2025",
      status: "completed",
      type: "Part-Time",
      description: [
        "Enforced role-based access control (RBAC) protocols across PeopleSoft and ACCOMMODATE — managing user provisioning, deprovisioning, and least-privilege access for 1,000+ users",
        "Diagnosed and resolved critical API routing bug in exam delivery system using MySQL queries — identified misconfigured API endpoint causing final exam submissions to route to incorrect destination",
        "Managed support ticket lifecycle using RT (Request Tracker) — triaged, tracked, and resolved system access, authentication, and data integrity issues",
        "Built and maintained Power BI reporting dashboards tracking accommodation request volumes, processing timelines, and compliance KPIs for institutional leadership"
      ],
      technologies: ["PeopleSoft", "MySQL", "Power BI", "RBAC", "API", "ServiceNow"]
    },
    {
      role: "Software Developer",
      company: "Valhalla Data Systems, Inc.",
      location: "Clarksburg, MD",
      period: "May 2024 – Aug 2024",
      status: "completed",
      type: "Full-Time",
      description: [
        "Designed and deployed Olademy.com — a Coursera-style online learning and course marketplace platform — using PHP (OOP), Apache HTTP Server, MySQL, and Linux (Ubuntu) achieving 99.9% uptime for 1,000+ users",
        "Built core platform features in PHP including user authentication (session-based login/registration), course enrollment workflows, and student progress tracking",
        "Integrated Moodle open-source LMS for course content sync and user data management — enabling seamless course delivery and student record synchronization",
        "Optimized MySQL query performance by 20% through schema normalization, indexing strategies, and query refactoring on enrollment and user tables",
        "Configured and maintained Apache web server on Linux production environment including virtual hosts, .htaccess rules, and server-side PHP execution"
      ],
      technologies: ["PHP", "MySQL", "Apache", "Linux", "Moodle", "OOP"]
    },
    {
      role: "Software Engineer (Data & Analytics) / Business Analyst",
      company: "Expand AI",
      location: "Bangalore, India",
      period: "Sep 2021 – Sep 2022",
      status: "completed",
      type: "Full-Time",
      description: [
        "Led 9-member engineering team building Python-based automation frameworks for healthcare data processing — reducing manual data processing by 45% using Pandas and NumPy pipelines",
        "Implemented predictive analytics and ML models in Python (Scikit-learn) to forecast key operational metrics — improving forecasting precision by 30%",
        "Developed Power BI dashboards and custom reporting tools translating healthcare operational data into executive KPI visibility — contributing to 25% faster decision cycles",
        "Collaborated with cross-functional stakeholders to translate clinical and business requirements into scalable backend solutions and database designs"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "ML", "Healthcare"]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat experience.log
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">EXPERIENCE</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 sm:left-6 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 ${
                  exp.status === "current" 
                    ? "bg-green-400 border-green-400 shadow-lg shadow-green-400/50" 
                    : "bg-black border-gray-600"
                }`}></div>
                
                <div className="border border-gray-800 hover:border-green-400 transition-colors duration-300 bg-black">
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-gray-800">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-mono">{exp.role}</h3>
                        <p className="text-sm sm:text-base text-green-400 font-mono mt-1">{exp.company}</p>
                        <p className="text-xs text-gray-500 font-mono mt-1">{exp.location}{exp.type ? ` • ${exp.type}` : ''}</p>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {exp.status === "current" && (
                          <span className="text-xs font-mono px-2 py-0.5 bg-green-400/20 text-green-400 border border-green-400/30 animate-pulse">
                            ● current
                          </span>
                        )}
                        <span className="text-xs text-gray-500 font-mono">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-4 sm:p-6">
                    <div className="text-xs text-gray-400 font-mono mb-3">
                      <span className="text-yellow-400">$</span> cat responsibilities.txt
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                          className="flex items-start text-xs sm:text-sm text-gray-300"
                        >
                          <span className="text-green-400 mr-2 flex-shrink-0 mt-0.5">{`>`}</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className="text-xs text-gray-400 font-mono mb-2">
                      <span className="text-yellow-400">$</span> echo $TECH_STACK
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-green-400/10 text-green-400 text-xs font-mono border border-green-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Post-Experience CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mt-12 sm:mt-16 text-center border border-gray-800 p-6 sm:p-8 bg-gray-900"
          >
            <p className="text-gray-400 font-mono text-sm sm:text-base mb-4">
              <span className="text-yellow-400">$</span> echo &quot;Looking for your next team member?&quot;
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4">WANT TO SEE WHAT I CAN BRING?</h3>
            <p className="text-gray-400 font-mono text-sm mb-6 max-w-xl mx-auto">
              I&apos;m ready to bring my experience in full-stack development, data engineering, and AI to your team.
            </p>
            <a
              href="#contact"
              className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              {'>'} let&apos;s_talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: "}",
      skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "PHP", "SQL", "C/C++", "HTML5", "CSS3"]
    },
    {
      name: "Frameworks & Libraries",
      icon: "<>",
      skills: ["React", "Node.js", "Next.js", "Spring Boot", "Hibernate", "Pandas", "NumPy", "Scikit-learn", "PyTorch"]
    },
    {
      name: "Databases",
      icon: "DB",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle (PL/SQL)", "Firebase Firestore", "DynamoDB"]
    },
    {
      name: "Cloud & DevOps",
      icon: "~",
      skills: ["AWS (EC2, Lambda, S3, Glue)", "Firebase", "CI/CD (GitHub Actions, Jenkins)", "Git/GitHub", "Docker"]
    },
    {
      name: "Data & Analytics",
      icon: "#",
      skills: ["Power BI (DAX, Power Query)", "Tableau", "ETL/ELT Pipelines", "Data Modeling", "Statistical Methods", "Snowflake", "Excel (Advanced)"]
    },
    {
      name: "Enterprise Systems",
      icon: "@",
      skills: ["PeopleSoft", "JIRA", "Confluence", "SharePoint", "ServiceNow", "Salesforce", "Agile/Scrum", "RBAC"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat skills.json
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">SKILLS</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-800 hover:border-green-400 transition-colors duration-300 bg-gray-900"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-lg sm:text-xl font-mono text-green-400 bg-green-400/10 px-2 py-1 border border-green-400/30">
                    {category.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-mono border border-green-400/30 hover:bg-green-400/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills → Projects Bridge CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#work"
            className="inline-block text-green-400 hover:text-white font-mono text-sm sm:text-base transition-colors duration-300 group"
          >
            See these skills in action <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
        </motion.div>
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
    },
    {
      id: 7,
      title: "The Valley Inc.",
      description: "A holding company for early-stage startups targeting underserved gaps — interstate carpooling, student deals, campus communities. Built for students, local businesses, and communities that existing tech overlooks.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Startup / Holding Company",
      link: "https://github.com/SrikarSistla08/TheValleyInc",
      image: "/valley.png",
      status: "In Progress"
    },
    {
      id: 8,
      title: "CoRoute",
      description: "Interstate carpooling MVP for mid-distance corridors across the US South. Full-stack with Firebase, Stripe integration, and driver payouts.",
      technologies: ["Next.js 14", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"],
      category: "Web Development / Startup",
      link: "https://github.com/SrikarSistla08/CoRoute",
      image: "/coroute.png",
      status: "In Progress"
    },
    {
      id: 9,
      title: "CampusDeals",
      description: "SaaS platform connecting local Arbutus businesses with UMBC students through exclusive deals and discounts. Features UMBC email verification and business dashboard.",
      technologies: ["Next.js 14", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Web Development / SaaS",
      link: "https://github.com/SrikarSistla08/CampusDeals",
      image: "/campusdeals.png",
      status: "In Progress"
    },
    {
      id: 10,
      title: "Lexsy Legal Assistant",
      description: "AI-powered web app that automates filling legal document templates through conversational interface. Detects placeholders in .docx files and guides users step-by-step.",
      technologies: ["React 18", "Vite", "Mammoth.js", "docx.js", "JavaScript"],
      category: "Web Development / AI",
      link: "https://github.com/SrikarSistla08/lexsy-legal-assistant",
      status: "Completed"
    },
    {
      id: 11,
      title: "E-Commerce Customer Segmentation",
      description: "RFM analysis and customer segmentation for e-commerce. Identifies revenue trends, high-value customers, and churn risk using Python and Power BI.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Power BI", "Jupyter Notebook"],
      category: "Data Analysis",
      link: "https://github.com/SrikarSistla08/E-Commerce-Customer-Segmentation",
      status: "Completed"
    }
  ];

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la projects/
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">PROJECTS</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
              className="group cursor-pointer border border-gray-800 hover:border-green-400 transition-colors duration-200 flex flex-col"
            >
              {(project.video || project.image) && (
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
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-opacity duration-200 group-hover:opacity-90"
                      loading="lazy"
                      quality={80}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="text-xs font-mono text-green-400 mb-1">{project.category}</div>
                    <div className="text-sm font-bold">{project.title}</div>
                  </div>
                </div>
              )}
              <div className="p-4 sm:p-6 bg-gray-900 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-mono leading-tight">{project.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-green-400/20 text-green-400 text-xs font-mono rounded border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono text-gray-500">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="text-green-400 group-hover:text-white transition-colors font-mono text-xs sm:text-sm">
                    {'>'} view repo
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Post-Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-12 sm:mt-16 text-center border border-gray-800 p-6 sm:p-8 bg-gray-900"
        >
          <p className="text-gray-400 font-mono text-sm sm:text-base mb-4">
            <span className="text-yellow-400">$</span> echo &quot;Interested in working together?&quot;
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4">HAVE A PROJECT IN MIND?</h3>
          <p className="text-gray-400 font-mono text-sm mb-6 max-w-xl mx-auto">
            I&apos;m always looking for new challenges and collaborations. Let&apos;s build something great together.
          </p>
          <a
            href="#contact"
            className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
          >
            {'>'} start_conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Publications Section
const Publications = () => {
  const publications = [
    {
      title: "Drug-Induced Autoimmunity Prediction Model using Ensemble Machine Learning",
      venue: "IEEE Baltimore Technical Colloquium",
      location: "Baltimore, MD",
      date: "November 17, 2025",
      authors: "Sistla, S. & Carter, K.",
      year: "2025",
      citations: 0,
      description: "Built ensemble ML models (Random Forest, XGBoost, SVM) in Python using PyTorch and Scikit-learn for biomedical risk prediction — improving accuracy by 18% over baseline models. Presented at IEEE Baltimore Technical Colloquium.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Al5pRkcAAAAJ&citation_for_view=Al5pRkcAAAAJ:2osOgNQ5qMEC",
      tags: ["IEEE", "Ensemble ML", "Healthcare", "PyTorch", "Scikit-learn"],
      type: "conference"
    },
    {
      title: "Drug-Induced Autoimmunity Prediction Model using Ensemble Machine Learning",
      venue: "IBBR Early Career Symposium",
      location: "Shady Grove, MD",
      date: "September 17, 2025",
      authors: "Sistla, S. & Carter, K.",
      year: "2025",
      citations: 0,
      description: "Invited presentation at IBBR Early Career Symposium. Featured research on predictive modeling using ensemble machine learning techniques for healthcare AI applications.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Al5pRkcAAAAJ&citation_for_view=Al5pRkcAAAAJ:2osOgNQ5qMEC",
      tags: ["IBBR", "Symposium", "Healthcare AI", "$5K Grant"],
      type: "symposium"
    },
    {
      title: "A Genetic Algorithm for Rule Generation to Predict Student Success",
      venue: "2025 IEEE Integrated STEM Education Conference (ISEC)",
      location: "Princeton, NJ",
      date: "March 15, 2025",
      authors: "Brown, M.S., Alandur, M.S.R., Chaudhair, S., & Sistla, S.",
      year: "2025",
      citations: 0,
      description: "Co-authored with Michael Scott Brown and Somita Chaudhari. Developed a genetic algorithm approach for generating predictive rules to assess student success in STEM education.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Al5pRkcAAAAJ&citation_for_view=Al5pRkcAAAAJ:2osOgNQ5qMEC",
      tags: ["IEEE", "ISEC", "Genetic Algorithm", "Education"],
      type: "conference"
    },
    {
      title: "Unified Platform for Advertising with Predictive Analysis",
      venue: "AIP Conference Proceedings",
      volume: "3028(1)",
      date: "2024",
      authors: "Geetha, V., Gomathy, C.K., Salopanthula, R.S., & Sistla, S.",
      year: "2024",
      citations: 6,
      description: "Built a unified advertising platform with predictive analytics capabilities. Collaborated with co-authors to develop models for ad performance prediction and optimization.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Al5pRkcAAAAJ&citation_for_view=Al5pRkcAAAAJ:u5HHmVD_uO8C",
      tags: ["AIP", "Predictive Analytics", "Advertising"],
      type: "journal"
    },
    {
      title: "Predicting Diabetes using SVM Implemented by Machine Learning",
      venue: "International Journal of Soft Computing and Engineering",
      volume: "12(2), 16-18",
      date: "2022",
      authors: "Sistla, S.",
      year: "2022",
      citations: 15,
      description: "Developed an SVM model to predict diabetes with 80% accuracy. Cleaned and preprocessed healthcare data using Pandas for feature engineering. Created visual reports explaining risk factors.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Al5pRkcAAAAJ&citation_for_view=Al5pRkcAAAAJ:9yKSN-GCB0IC",
      tags: ["SVM", "Healthcare", "Machine Learning", "Python"],
      type: "journal"
    }
  ];

  const totalCitations = 21;
  const hIndex = 2;

  return (
    <section id="publications" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> grep -r &quot;publications&quot; .
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">PUBLICATIONS</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto mb-4 sm:mb-6"></div>
          
          {/* Citation Metrics */}
          <div className="flex justify-center items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-mono">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{totalCitations}</div>
              <div className="text-gray-400">Citations</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{hIndex}</div>
              <div className="text-gray-400">h-index</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">5</div>
              <div className="text-gray-400">Papers</div>
            </div>
          </div>
          <a
            href="https://scholar.google.com/citations?user=Al5pRkcAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs sm:text-sm text-green-400 hover:text-white font-mono transition-colors"
          >
            {'>'} google_scholar_profile
          </a>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block border border-gray-800 hover:border-green-400 transition-colors duration-300 p-4 sm:p-6 bg-black group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-mono px-2 py-0.5 ${
                      pub.type === "conference" ? "bg-blue-400/10 text-blue-400 border border-blue-400/30" :
                      pub.type === "symposium" ? "bg-purple-400/10 text-purple-400 border border-purple-400/30" :
                      "bg-green-400/10 text-green-400 border border-green-400/30"
                    }`}>
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono group-hover:text-green-400 transition-colors">{pub.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">{pub.authors}</p>
                  <p className="text-xs sm:text-sm text-green-400 font-mono">{pub.venue}{pub.volume ? `, ${pub.volume}` : ''}</p>
                  <p className="text-xs text-gray-500 font-mono">{pub.location} • {pub.date}</p>
                </div>
                <div className="flex items-center space-x-3 flex-shrink-0">
                  {pub.citations > 0 && (
                    <span className="text-xs font-mono px-2 py-1 bg-green-400/10 text-green-400 border border-green-400/30">
                      {pub.citations} citations
                    </span>
                  )}
                  <span className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">{'>'} view paper</span>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{pub.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {pub.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-mono border border-green-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Post-Publications CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-12 sm:mt-16 text-center border border-gray-800 p-6 sm:p-8 bg-black"
        >
          <p className="text-gray-400 font-mono text-sm sm:text-base mb-4">
            <span className="text-yellow-400">$</span> echo &quot;Research collaboration?&quot;
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4">INTERESTED IN COLLABORATING?</h3>
          <p className="text-gray-400 font-mono text-sm mb-6 max-w-xl mx-auto">
            I&apos;m passionate about research in ML/AI, healthcare analytics, and data science. Let&apos;s work together.
          </p>
          <a
            href="#contact"
            className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
          >
            {'>'} reach_out
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Awards & Grants Section
const Awards = () => {
  const awards = [
    {
      title: "$5,000 Research Grant",
      org: "UMBC College of Engineering and IT",
      year: "2024–2025",
      description: "Awarded for interdisciplinary research in predictive modeling using Machine Learning in healthcare AI applications",
      icon: "💰"
    },
    {
      title: "Invited Presenter — ISEC 2025",
      org: "IEEE Integrated STEM Education Conference",
      year: "2025",
      description: "Invited to present additional IEEE paper on short notice at ISEC 2025 — demonstrating technical depth and subject mastery",
      icon: "🎤"
    }
  ];

  const certs = [
    {
      title: "Business Analysis Foundations",
      org: "IIBA",
      status: "Completed",
      icon: "📋"
    },
    {
      title: "Big Data, PySpark & AWS",
      org: "Udemy",
      status: "Completed",
      icon: "☁️"
    },
    {
      title: "Snowflake for Data Scientists",
      org: "Snowflake",
      status: "In Progress",
      icon: "❄️"
    }
  ];

  return (
    <section id="awards" className="py-12 sm:py-16 lg:py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat awards.json
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">RECOGNITION & CREDENTIALS</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Awards Column */}
          <div>
            <h3 className="text-sm sm:text-base font-mono text-gray-400 mb-4 sm:mb-6 flex items-center">
              <span className="text-green-400 mr-2">❯</span> Awards & Grants
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-800 hover:border-green-400 transition-colors duration-300 p-4 sm:p-6 bg-gray-900"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{award.icon}</span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-mono">{award.title}</h4>
                      <p className="text-xs sm:text-sm text-green-400 font-mono">{award.org}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{award.year}</p>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-sm sm:text-base font-mono text-gray-400 mb-4 sm:mb-6 flex items-center">
              <span className="text-green-400 mr-2">❯</span> Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-800 hover:border-green-400 transition-colors duration-300 p-4 sm:p-6 bg-gray-900"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white font-mono">{cert.title}</h4>
                      <p className="text-xs sm:text-sm text-green-400 font-mono">{cert.org}</p>
                      <span className={`inline-block text-xs font-mono px-2 py-0.5 mt-2 ${
                        cert.status === "Completed" 
                          ? "bg-green-400/20 text-green-400 border border-green-400/30" 
                          : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                      }`}>
                        {cert.status === "Completed" ? "✓ completed" : "● in_progress"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Future Goals Section
const FutureGoals = () => {
  const goals = [
    {
      status: "in_progress",
      title: "CoRoute Launch",
      description: "Launching interstate carpooling platform for mid-distance corridors across the US South",
      timeline: "2025"
    },
    {
      status: "in_progress",
      title: "CampusDeals Expansion",
      description: "Expanding student deals platform to more universities beyond UMBC",
      timeline: "2025"
    },
    {
      status: "planned",
      title: "ArrivalKit",
      description: "New startup project under The Valley Inc. portfolio - helping newcomers settle in",
      timeline: "2025"
    },
    {
      status: "planned",
      title: "CampusGigs",
      description: "Campus gig economy platform connecting students with local opportunities",
      timeline: "2025"
    },
    {
      status: "planned",
      title: "LocalLayer",
      description: "Local business infrastructure platform for community-driven commerce",
      timeline: "2026"
    }
  ];

  return (
    <section id="goals" className="py-12 sm:py-16 lg:py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat roadmap.md
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">FUTURE GOALS</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 sm:left-6 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 ${
                  goal.status === "in_progress" 
                    ? "bg-green-400 border-green-400" 
                    : "bg-black border-gray-600"
                }`}></div>
                
                <div className="border border-gray-800 hover:border-green-400 transition-colors duration-300 p-4 sm:p-6 bg-gray-900">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white font-mono">{goal.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-mono px-2 py-0.5 ${
                        goal.status === "in_progress" 
                          ? "bg-green-400/20 text-green-400" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {goal.status === "in_progress" ? "● in_progress" : "○ planned"}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{goal.timeline}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
          }, 1000);
        }
      }, 50);
      
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
    { src: "/sec5.JPG", title: "Urban Pulse", category: "Street" },
    { src: "/sec6.jpg", title: "Geometric Harmony", category: "Architecture" },
    { src: "/sec7.jpg", title: "Chid's Play", category: "Nature" },
    { src: "/sec8.JPG", title: "Street Stories", category: "Street" },
    { src: "/sec9.JPG", title: "City Rhythms", category: "Architecture" },
    { src: "/sec10.jpg", title: "Modern Lines", category: "Architecture" },
    { src: "/bc.JPG", title: "Sunset Serenity", category: "Nature" },
    { src: "/bc2.jpg", title: "Air Borne", category: "Nature" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la photography/
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">PHOTOGRAPHY</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        {/* Envelope/Dropdown Container */}
        <div className="relative">
          {/* Envelope Header - Clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div 
              className="border border-gray-700 rounded-lg bg-black/60 backdrop-blur-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {/* Gallery Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/30 border-b border-gray-700">
                <div className="text-gray-400 font-mono text-sm">gallery_view.exe</div>
                <div className="text-gray-500 font-mono text-xs">Loading {photos.length} images...</div>
              </div>
              
              <div className="p-6">
                {/* Photo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: isExpanded ? 1 : 0, 
                        y: isExpanded ? 0 : 30
                      }}
                      transition={{ 
                        duration: 0.2, 
                        delay: index * 0.02,
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
                          loading="lazy"
                          quality={75}
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
                    <span className="text-yellow-400">$</span> echo &quot;Capturing moments, one frame at a time&quot;
                  </div>
                  <motion.div 
                    className="text-xs text-gray-500 font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-green-400">$</span> find . -name &quot;*.jpg&quot; | wc -l && echo &quot;stories captured&quot;
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedPhoto(null)}
          >
      <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl w-full"
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
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300 touch-manipulation"
                  title="Previous photo"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNextPhoto}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300 touch-manipulation"
                  title="Next photo"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Photography CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 text-center border border-gray-800 p-6 sm:p-8 bg-black"
      >
        <p className="text-gray-400 font-mono text-sm sm:text-base mb-4">
          <span className="text-yellow-400">$</span> echo &quot;Need a photographer?&quot;
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mb-4">NEED PHOTOGRAPHY FOR YOUR PROJECT?</h3>
        <p className="text-gray-400 font-mono text-sm mb-6 max-w-xl mx-auto">
          From event coverage to product photography, I bring a unique perspective to every shoot.
        </p>
        <a
          href="#contact"
          className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
        >
          {'>'} book_session
        </a>
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> cat about.txt
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">ABOUT</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="relative h-64 sm:h-80 lg:h-96 border border border-gray-800">
              <Image
                src="/Profile.jpg"
                alt="Srikar Sistla"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
            
            {/* Laptop Sticker Strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 p-4 sm:p-6 border border-gray-800 bg-gray-900/50">
              <motion.div whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-default">
                <Image src="/UMBC.png" alt="UMBC" width={120} height={40} className="h-12 sm:h-14 w-auto object-contain" />
              </motion.div>
              <motion.div whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-default">
                <Image src="/SCSVMV.png" alt="SCSVMV" width={120} height={40} className="h-12 sm:h-14 w-auto object-contain" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 font-mono"
          >
            <div className="text-sm text-gray-400">
              <span className="text-yellow-400">{'//'}</span> Professional Summary
            </div>
            <p className="text-gray-300 leading-relaxed">
              Data Science Associate with 3+ years building Python analytics pipelines, developing SQL-based data models, 
              and delivering visualization solutions that translate complex datasets into actionable insights for decision-makers. 
              Published IEEE researcher in ensemble ML with a $5,000 UMBC research grant.
            </p>
            <div className="space-y-2 text-sm">
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">education</span> = <span className="text-green-400">&quot;MS Information Systems @ UMBC (GPA: 3.24)&quot;</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">bachelors</span> = <span className="text-green-400">&quot;BE Computer Science @ SCSVMV (GPA: 3.7)&quot;</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">experience</span> = <span className="text-green-400">&quot;7 roles | 3+ years&quot;</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">location</span> = <span className="text-green-400">&quot;Baltimore, MD&quot;</span>;</div>
              <div><span className="text-blue-400">const</span> <span className="text-yellow-400">work_auth</span> = <span className="text-green-400">&quot;F-1 OPT | STEM Extension — Feb 2029&quot;</span>;</div>
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


// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-10"
        >
          <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-mono">
            <span className="text-yellow-400">$</span> contact --help
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">LET&apos;S BUILD SOMETHING</h2>
          <div className="w-16 sm:w-24 h-0.5 bg-green-400 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg text-gray-300 font-mono max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, collaborations, and conversations. Whether you have a question or just want to say hi — my inbox is open.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:Srikarsistla710@gmail.com"
              className="group border border-gray-800 hover:border-green-400 p-6 sm:p-8 transition-all duration-300 text-left"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">✉️</div>
              <div className="text-sm sm:text-base font-mono text-white group-hover:text-green-400 transition-colors mb-2">Email</div>
              <div className="text-xs sm:text-sm font-mono text-gray-500 break-all">Srikarsistla710@gmail.com</div>
            </a>
            <a
              href="https://github.com/SrikarSistla08"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-800 hover:border-green-400 p-6 sm:p-8 transition-all duration-300 text-left"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⌨️</div>
              <div className="text-sm sm:text-base font-mono text-white group-hover:text-green-400 transition-colors mb-2">GitHub</div>
              <div className="text-xs sm:text-sm font-mono text-gray-500">@SrikarSistla08</div>
            </a>
            <a
              href="https://www.linkedin.com/in/Srikarsistla/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-800 hover:border-green-400 p-6 sm:p-8 transition-all duration-300 text-left"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💼</div>
              <div className="text-sm sm:text-base font-mono text-white group-hover:text-green-400 transition-colors mb-2">LinkedIn</div>
              <div className="text-xs sm:text-sm font-mono text-gray-500">/in/Srikarsistla</div>
            </a>
          </div>

          <div className="pt-4">
            <a
              href="mailto:Srikarsistla710@gmail.com"
              className="inline-block border border-green-400 px-8 py-4 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              {'>'} send_message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Spider Scroll Animation
const SpiderAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const spiderY = scrollProgress * (typeof window !== 'undefined' ? window.innerHeight - 40 : 0);

  return (
    <div className="fixed left-3 top-0 h-full z-40 pointer-events-none hidden lg:block">
      {/* Web line */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gray-700 to-transparent"
        style={{ height: `${scrollProgress * 100}%` }}
      />
      {/* Spider */}
      <div
        className="absolute left-1/2 -translate-x-1/2 transition-transform duration-100 ease-out"
        style={{ transform: `translateX(-50%) translateY(${spiderY}px)` }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spider body */}
          <circle cx="12" cy="14" r="4" fill="#374151" stroke="#6B7280" strokeWidth="1"/>
          <circle cx="12" cy="8" r="3" fill="#374151" stroke="#6B7280" strokeWidth="1"/>
          {/* Eyes */}
          <circle cx="10.5" cy="7" r="1" fill="#EF4444"/>
          <circle cx="13.5" cy="7" r="1" fill="#EF4444"/>
          {/* Legs - left */}
          <path d="M8 12 L2 8" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 14 L1 14" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 16 L2 20" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          {/* Legs - right */}
          <path d="M16 12 L22 8" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          <path d="M16 14 L23 14" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          <path d="M16 16 L22 20" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

// Sticky Floating CTA
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-400 text-black px-4 py-3 font-mono text-sm font-bold hover:bg-green-300 transition-colors duration-300 shadow-lg shadow-green-400/20"
    >
      {'>'} hire_me
    </motion.a>
  );
};

// Footer
const Footer = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="py-12 bg-black text-green-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer CTA */}
        <div className="text-center mb-8">
          <p className="text-gray-400 font-mono text-sm mb-4">
            <span className="text-yellow-400">$</span> echo &quot;Like what you see?&quot;
          </p>
          <a
            href="#contact"
            className="inline-block border border-green-400 px-8 py-3 text-sm font-mono text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
          >
            {'>'} lets_connect
          </a>
        </div>

        {/* Footer Info */}
        <div className="text-center border-t border-gray-800 pt-8">
          <div className="text-sm font-mono mb-2">
            <span className="text-gray-400">$</span> {`echo "© ${mounted ? new Date().getFullYear() : '2024'} Srikar Sistla. All rights reserved."`}
          </div>
          <div className="text-xs text-gray-500 font-mono mb-2">
            <span className="text-yellow-400">$</span> uptime
          </div>
          <div className="text-gray-400 font-mono text-xs">
            Running on <span className="text-green-400">Next.js</span> | Built with <span className="text-blue-400">love</span> and <span className="text-purple-400">coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


// Terminal Loading Skeleton
const LoadingSkeleton = () => {
  const [loading, setLoading] = useState(true);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const terminalLines = [
      "$ initializing portfolio...",
      "$ loading modules... [React, Next.js, Framer Motion]",
      "$ mounting components...",
      "$ fetching projects... 11 repos found",
      "$ compiling styles... tailwindcss",
      "$ ready."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="max-w-lg w-full px-6">
        <div className="border border-gray-800 p-6 bg-gray-900">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-gray-400"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-2 h-4 bg-green-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Page Component
export default function Home() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      const shortcuts: Record<string, string> = {
        '1': '#about',
        '2': '#experience',
        '3': '#work',
        '4': '#awards',
        '5': '#contact',
        't': 'top',
      };
      
      const target = shortcuts[e.key];
      if (target) {
        e.preventDefault();
        if (target === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <LoadingSkeleton />
      <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectsShowcase />
        <Publications />
        <Awards />
        <FutureGoals />
        <PhotographyGallery />
        <Contact />
        <Footer />
        <SpiderAnimation />
        <StickyCTA />
      </div>
  );
}
