"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Simple image carousel component
function SimpleImageCarousel() {
  const images = [
    "/dhiraj madan.jpg",
    "/ai-image-2.jpg", 
    "/ai-image-3.jpg",
    "/arnab6.jpg",
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [images.length]);
  
  return (
    <div className="relative w-full h-full">
      <Image
        src={images[currentImage]}
        alt="AI Healthcare Visualization"
        fill
        className="object-cover rounded-md"
        sizes="(max-width: 768px) 100vw, 500px"
        priority
      />
      
      {/* Simple navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentImage ? "bg-indigo-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// TypeWriter effect component for the heading
function TypeWriter({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, speed, text]);

  return <>{displayText}</>;
}

// Parallax effect for scrolling
function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const y = scrollY * speed;
  
  return { ref, y };
}

export default function Home() {
  const heroParallax = useParallax(0.15);
  const gridParallax = useParallax(0.05);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking anywhere else
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <main className="min-h-screen font-sans bg-gray-900 text-gray-100">
      {/* Navigation - Updated for mobile responsiveness */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo/Title */}
      <div className="flex-shrink-0 flex items-center">
  <Link 
    href="/" 
    className="font-bold text-xs sm:text-sm md:text-base text-teal-400 hover:text-teal-300 transition-colors duration-300 leading-tight"
  >
    Generative AI for Image Processing &<span className="hidden sm:inline"> Healthcare</span>
    <span className="sm:hidden">...</span>
  </Link>
</div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
                {/* Icon when menu is closed */}
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  /* Icon when menu is open */
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link href="#about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
                About
              </Link>
              <Link href="#topics" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
                Curriculum
              </Link>
              <Link href="#speakers" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
                Speakers
              </Link>
              <Link 
    href="#footer" 
    className="px-4 py-2 rounded-md bg-teal-500/20 text-sm font-medium text-teal-400 hover:bg-teal-500/30 border border-teal-500/30 transition-all duration-300"
  >
    <span className="flex items-center">
      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
      Contact Us
    </span>
  </Link>
            </div>
          </div>
        </div>
         {/* Contact Us button with visual emphasis */}

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
            <Link 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              About
            </Link>
            <Link 
              href="#topics" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Curriculum
            </Link>
            <Link 
              href="#speakers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Speakers
            </Link>
            <Link 
      href="#footer" 
      onClick={() => setMobileMenuOpen(false)}
      className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-teal-400 border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20"
    >
      <div className="flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        Contact Us
      </div>
    </Link>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="relative overflow-hidden bg-gray-800" style={{ height: '90vh' }}>
  {/* Background elements remain unchanged */}
  <div 
    ref={heroParallax.ref}
    style={{ 
      transform: `translateY(${heroParallax.y}px)`,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0 
    }}
    className="pointer-events-none"
  >
    {/* Background elements */}
    <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"></div>
    <div className="absolute bottom-20 right-[15%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
    
    {/* Grid pattern */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234fd1c5' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left column - Text content with repositioned date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Combined event badge with date */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-700 text-teal-400 text-xs font-medium">
            Summer School 2025
          </div>
          
          <div className="flex items-center text-gray-300">
          </div>
        </div>
        
        {/* Title with typewriter effect */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
          <TypeWriter text="Generative AI for" />
          <span className="block text-teal-400">
            <TypeWriter text="Image Processing & Healthcare" speed={80} />
          </span>
        </h1>
        
        <div className="mt-6 h-1 w-16 bg-teal-400 rounded-full"></div>
        
  {/* Date placed here as subtitle - now in an attractive box */}
<div className="mt-8 mb-6">
  <div className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-400/30 shadow-lg shadow-teal-900/20 transform hover:translate-y-[-2px] transition-all duration-300">
    <div className="flex items-center mr-4 pr-4 border-r border-teal-400/30">
      <svg className="w-6 h-6 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span className="text-xl font-semibold text-white">7th – 9th May 2025</span>
    </div>
    <div className="flex items-center">
      <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <span className="text-lg text-white">Mahindra University</span>
    </div>
  </div>
</div>
        
        {/* Key facts row */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-xs text-gray-400 mt-1">Day Event</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">9</div>
            <div className="text-xs text-gray-400 mt-1">Expert Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">9+</div>
            <div className="text-xs text-gray-400 mt-1">Topics Covered</div>
          </div>
        </div>
      </motion.div>
      
      {/* Right column - Simple Image Display */}
      <motion.div 
        className="hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-md border border-teal-500/20"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-md border border-teal-500/20"></div>
          
          {/* Simple image display */}
          <div className="relative rounded-lg overflow-hidden border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 h-64 relative">
              <SimpleImageCarousel />
              
              {/* Optional overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-sm font-medium">Generative AI for Healthcare</h3>
                <p className="text-gray-300 text-xs mt-2">Advanced techniques for medical imaging</p>
              </div>
            </div>
            
            {/* Card footer */}
            <div className="p-6 bg-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">AI for Healthcare</div>
              </div>
              
              <div className="mt-2 text-xs text-gray-500">
                <p>Add your own images in /public directory</p>
                <p>Recommended: 600px × 400px (3:2 ratio)</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* About Section - More Minimalist Design */}
<section id="about" className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section title with animation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Our Summer School</h2>
      <div className="w-24 h-1 mx-auto rounded-full bg-teal-400"></div>
    </motion.div>

    {/* Introduction Section with Mahindra University branding - SHORTENED */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-800 border border-teal-500/30 text-teal-400 text-sm font-medium">
            Conducted by Mahindra University
          </div>
        </div>
        
        <p className="text-lg text-gray-300 mb-6">
          Mahindra University presents an intensive three-day Summer School on Generative AI for Healthcare and Image Processing. Join leading experts for a comprehensive exploration of advanced AI techniques tailored for medical applications, combining theoretical foundations with hands-on workshops.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Image Processing</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Healthcare</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Data Synthesis</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Medical Imaging</span>
        </div>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left column - Importance - SHORTENED */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 rounded-lg bg-gray-800 border-l-4 border-teal-400">
          <h3 className="text-2xl font-semibold mb-6 text-white">Why Generative AI?</h3>
          <p className="text-base text-gray-300 mb-4">
            Generative AI is revolutionizing healthcare and imaging by creating new data from existing information. This capability enables breakthrough applications in medical diagnostics, image enhancement, and personalized treatment planning.
          </p>
          
          <div className="mt-6 p-4 bg-gray-700/30 rounded-md">
            <h4 className="text-lg font-medium text-white mb-3">Target Audience</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Graduate students and researchers in Computer Science, AI, and Healthcare</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Healthcare professionals interested in AI-enhanced clinical practices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Industry professionals developing AI tools for medical applications</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Right column - Program Objectives - SHORTENED */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="p-8 rounded-lg bg-gray-800 border border-teal-500/30">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal-400 text-gray-900 flex items-center justify-center text-xl font-bold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-4">Program Objectives</h3>
          
          <div className="space-y-4">
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Generative AI Foundations</h4>
              <p className="text-sm text-gray-400 mt-1">Master core techniques in generative models with applications in healthcare.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Healthcare Applications</h4>
              <p className="text-sm text-gray-400 mt-1">Explore AI-driven medical imaging, diagnostics, and personalized medicine.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Practical Implementation</h4>
              <p className="text-sm text-gray-400 mt-1">Gain hands-on experience with leading frameworks through workshops.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Industry Networking</h4>
              <p className="text-sm text-gray-400 mt-1">Connect with leading experts and peers in the AI healthcare domain.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Technologies section - REARRANGED */}
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-8 text-center text-white">Technologies & Frameworks</h3>
      
<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
  {[
    { name: "Diffusion Models", icon: "🌀", desc: "State-of-the-art generative models" },
    { name: "GANs", icon: "🎭", desc: "Generative Adversarial Networks" },
    { name: "VAEs", icon: "🔄", desc: "Variational Autoencoders" },
    { name: "Transformers", icon: "🤖", desc: "Advanced AI Models" },
    { name: "PyTorch", icon: "🔥", desc: "Deep Learning Framework" },
    { name: "TensorFlow", icon: "📊", desc: "Machine Learning Platform" },
  ].map((tech, index) => (
    <div 
      key={index}
      className="flex flex-col items-center"
    >
      <div className="text-2xl mb-2">{tech.icon}</div>
      <div className="text-sm font-medium text-white text-center w-full">
        {tech.name}
      </div>
    </div>
  ))}
</div>
    </motion.div>
  </div>
</section>
{/* Speakers Section */}
<section id="speakers" className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section title with animation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Distinguished Speakers</h2>
      <div className="w-24 h-1 mx-auto rounded-full bg-teal-400"></div>
      <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
        Learn from leading experts in AI, healthcare, and computer vision from prestigious institutions across India and beyond.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Prof. G. Narahari Sastry",
          role: "Professor",
          affiliation: "IIT Hyderabad",
          website: "https://iith.ac.in/bt/gnsastry/",
          image: "/G._Narahari_Sastry.jpg"
        },
        {
          name: "Dr. R. B. Pachori",
          role: "Professor",
          affiliation: "IIT Indore",
          website: "https://people.iiti.ac.in/~pachori/",
          image: "/rbpachauri.jpg"
        },
        {
          name: "Dr. Vineeth N Balasubramanian",
          role: "Professor",
          affiliation: "IIT Hyderabad",
          website: "https://people.iith.ac.in/vineethnb/",
          image: "/Vineeth_N_Balasubramanian.jpg"
        },
        {
          name: "Dr. Subramanyam Murala",
          role: "Associate Professor",
          affiliation: "Trinity Dublin, Ireland",
          website: "https://www.scss.tcd.ie/~muralas/",
          image: "/murala.png"
        },
        {
          name: "Dr. Shiv Ram Dubey",
          role: "Assistant Professor",
          affiliation: "IIIT Allahabad",
          website: "https://it.iiita.ac.in/?pg=facultypage&uid=srdubey",
          image: "/srdubey.jpg"
        },
        {
          name: "Dhiraj Madaan",
          role: "Scientist",
          affiliation: "IBM Research",
          website: "https://research.ibm.com/people/dhiraj-madan",
          image: "/dhiraj madan.jpg"
        },
        {
          name: "Om Ashish Mishra",
          role: "Data Scientist",
          affiliation: "Deloitte Hyderabad",
          website: "https://www.omashish.com/",
          image: "/omashish.jpg"
        },
        {
          name: "Dr. Arnab Bhattacharya",
          role: "Professor",
          affiliation: "IIT Kanpur",
          website: "https://iitk.ac.in/new/arnab-bhattacharya",
          image: "/arnab6.jpg"
        },
        {
          name: "Dr. Debdoot Sheet",
          role: "Assistant Professor",
          affiliation: "IIT Kharagpur",
          website: "http://www.facweb.iitkgp.ac.in/~debdoot/",
          image: "/Debdoot.jpg"
        }
      ].map((speaker, index) => {
        // Create speaker initials for the avatar
        const initials = speaker.name
          .split(' ')
          .filter(part => part.length > 1 && part !== "Dr." && part !== "Prof.")
          .map(name => name[0])
          .join('')
          .substring(0, 2)
          .toUpperCase();
          
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-md hover:shadow-lg hover:border-teal-500/30 transition-all duration-300"
          >
            <div className="relative">
              {/* Decorative element to match site aesthetic */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-teal-500/20 to-transparent"></div>
              
              {/* Header area with image */}
              <div className="p-6 flex items-center">
                {/* Image container */}
                <div className="w-20 h-20 mr-5 relative rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-700 shadow-inner">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={`Photo of ${speaker.name}`}
                      fill
                      className="object-cover object-center"
                      sizes="80px"
                      onError={() => {
                        console.log(`Failed to load image for ${speaker.name}`);
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-teal-900/30 text-white text-xl font-bold">
                      {initials}
                    </div>
                  )}
                </div>
                
                {/* Title area - Name is now clickable */}
                <div>
                  <a 
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-white hover:text-teal-400 transition-colors duration-300"
                  >
                    {speaker.name}
                  </a>
                  <p className="text-sm text-teal-400">{speaker.role}</p>
                </div>
              </div>
            </div>
            
            {/* Subtle divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            
            {/* Content area */}
            <div className="p-6">
              {/* Affiliation with matching icon style */}
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-700 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">{speaker.affiliation}</span>
              </div>
              
              {/* Website indicator tag (instead of buttons) */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-xs text-gray-500">
                  <span className="inline-flex items-center">
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

{/* Footer Section - Updated with Professor Contact */}
<footer id="footer" className="bg-gray-800 border-t border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      {/* Updated Logo/Title */}
      <div className="mb-6 md:mb-0">
        <span className="font-bold text-sm sm:text-base md:text-lg text-teal-400 leading-tight">
          Generative AI for Image Processing <br className="hidden sm:block" />& Healthcare
        </span>
      </div>
      
      {/* Quick Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
        <a href="#about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300">
          About
        </a>
        <a href="#topics" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300">
          Curriculum
        </a>
        <a href="#speakers" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300">
          Speakers
        </a>
      </div>
      
      {/* Contact Icons */}
      <div className="flex items-center space-x-4">
        <a href="mailto:info@aisummeracademy.edu" className="text-gray-500 hover:text-teal-400 transition-colors duration-300" aria-label="Email">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors duration-300" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
      </div>
    </div>
    
    {/* Professor Contact Card - NEW SECTION */}
    <div className="border-t border-gray-700/30 pt-8 mb-8">
      <h3 className="text-center text-xl font-semibold text-white mb-6">Contact Coordinator</h3>
      
      <div className="max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col sm:flex-row">
          {/* Professor Image Placeholder */}
          <div className="sm:w-1/3 bg-gray-700">
            <div className="h-full w-full relative min-h-[180px]">
              {/* Replace this with actual Image component when you have the photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-gray-600 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              
              {/* Comment guide for adding real image */}
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <span className="text-xs text-gray-500">Add professor photo here</span>
                <span className="block text-xs text-gray-500">(Recommended: 400px × 400px)</span>
              </div>
            </div>
          </div>
          
          {/* Professor Contact Info */}
          <div className="sm:w-2/3 p-6">
            <h4 className="text-lg font-semibold text-white">Dr. Jane Doe</h4>
            <p className="text-teal-400 text-sm mb-4">Associate Professor, Department of Computer Science</p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="text-sm text-gray-300">jane.doe@mahindra.edu</p>
                  <p className="text-xs text-gray-500 mt-1">Please include "Summer School 2025" in the subject</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <p className="text-sm text-gray-300">+91 98765 43210</p>
                  <p className="text-xs text-gray-500 mt-1">Available Mon-Fri, 9:00 AM - 5:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Divider & Copyright */}
    <div className="border-t border-gray-700/30 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Mahindra University. All rights reserved.
        </p>
        <div className="text-xs text-gray-500">
          May 7-9, 2025 • Hyderabad, India
        </div>
      </div>
      
      {/* Credit line */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          Designed with <span className="text-teal-400">❤</span> by Mahindra University Web Team
        </p>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}