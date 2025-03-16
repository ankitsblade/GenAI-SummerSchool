"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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

  return (
    <main className="min-h-screen font-sans bg-gray-900 text-gray-100">
 {/* Navigation */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/" className="font-bold text-xl text-teal-400 hover:text-teal-300 transition-colors duration-300">
          Gen AI Summer School
        </Link>
      </div>
      <div className="sm:ml-6 sm:flex sm:items-center sm:space-x-8">
        <Link href="#about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
          About
        </Link>
        <Link href="#topics" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
          Curriculum
        </Link>
        <Link href="#speakers" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300">
          Speakers
        </Link>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section - Minimalist Design */}
<section className="relative overflow-hidden bg-gray-800" style={{ height: '90vh' }}>
  {/* Subtle background elements */}
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
    {/* Simplified abstract shapes - fewer and more subtle */}
    <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"></div>
    <div className="absolute bottom-20 right-[15%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
    
    {/* Minimalist grid pattern with reduced opacity */}
    <div 
      ref={gridParallax.ref}
      className="absolute inset-0 opacity-20"
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234fd1c5' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
{/* Left column - Text content */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center gap-4 mb-6">
    <div className="inline-block px-4 py-1 rounded-full bg-gray-700 text-teal-400 text-xs font-medium">
      Summer School 2025
    </div>
    <div className="inline-block px-4 py-1 rounded-full bg-gray-700 text-white text-xs font-medium">
      7th – 9th May 2025
    </div>
  </div>
  
  <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
    <TypeWriter text="Generative AI for" />
    <span className="block text-teal-400">
      <TypeWriter text="Image Processing & Healthcare" speed={80} />
    </span>
  </h1>
  
  <div className="mt-6 h-1 w-16 bg-teal-400 rounded-full"></div>
  
  <p className="mt-6 text-xl max-w-2xl text-gray-300">
    Immerse yourself in the intersection of AI, imaging, and healthcare. 
    Learn practical applications from industry experts and build skills for the future.
  </p>
  
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
  <Link 
    href="#footer" 
    className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium border border-teal-400 text-teal-400 hover:bg-gray-700 transition-colors duration-300"
  >
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
    Contact Us
  </Link>
</div>

{/* Key facts row - updated with actual information */}
<div className="mt-12 grid grid-cols-3 gap-4">
  <div className="text-center">
    <div className="text-3xl font-bold text-white">3</div>
    <div className="text-xs text-gray-400 mt-1">Day Event</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-white">11</div>
    <div className="text-xs text-gray-400 mt-1">Expert Speakers</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-white">9+</div>
    <div className="text-xs text-gray-400 mt-1">Topics Covered</div>
  </div>
</div>
</motion.div>
      
      {/* Right column - Simplified image/illustration */}
      <motion.div 
        className="hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="relative">
          {/* Floating elements using minimal design */}
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-md border border-teal-500/20"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-md border border-teal-500/20"></div>
          
          {/* Main content card */}
          <div className="relative rounded-lg overflow-hidden border border-gray-700">
            <div className="aspect-w-16 aspect-h-9 relative h-64">
              {/* Minimalist representation of medical imaging and AI */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden">
                  {/* Grid pattern representing data */}
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-[1px]">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`${
                          Math.random() > 0.7 
                            ? 'bg-teal-900/40' 
                            : Math.random() > 0.5 
                              ? 'bg-gray-800/80' 
                              : 'bg-gray-800/40'
                        }`}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Brain scan representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-teal-500/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-dashed border-teal-400/50 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-teal-500/20"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Processing lines */}
                  <div className="absolute bottom-4 left-4 right-4 h-4 flex items-center">
                    <div className="h-0.5 bg-teal-500/30 w-full relative">
                      <div className="absolute left-0 h-0.5 bg-teal-400 animate-[pulse_4s_ease-in-out_infinite]" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">AI-Enhanced Imaging</div>
              </div>
              
              <div className="space-y-2">
                <div className="h-1.5 rounded-full w-full bg-gray-700"></div>
                <div className="h-1.5 rounded-full w-4/5 bg-gray-700"></div>
                <div className="h-1.5 rounded-full w-2/3 bg-gray-700"></div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="text-xs font-mono text-teal-400">01:// Healthcare</div>
                <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
                  <svg className="w-3 h-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
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

    {/* Introduction Section with Mahindra University branding */}
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
        
        <p className="text-lg text-gray-300 mb-4">
          Mahindra University's Summer School on Generative AI for Image Processing and Healthcare is an intensive six-week program designed to bridge the gap between academic research and practical applications in the rapidly evolving field of AI.
        </p>
        
        <p className="text-lg text-gray-300 mb-6">
          Hosted by the Ecole School of Engineering at Mahindra University, this program brings together leading experts from academia and industry to provide participants with a comprehensive understanding of generative AI techniques specifically tailored for medical imaging and healthcare applications. The curriculum combines theoretical foundations with hands-on workshops, allowing participants to develop practical skills while working on real-world challenges.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Image Processing</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Healthcare</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Data Synthesis</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Medical Imaging</span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">Diagnostics</span>
        </div>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left column - Importance */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 rounded-lg bg-gray-800 border-l-4 border-teal-400">
          <h3 className="text-2xl font-semibold mb-6 text-white">Importance of Generative AI</h3>
          <p className="text-base text-gray-300 mb-4">
            Among the various AI paradigms, generative AI stands out because it can generate new data from existing data, making it extremely valuable for tasks such as data synthesis, noise reduction, image reconstruction, and more.
          </p>
          <p className="text-base text-gray-300">
            The field of Generative AI is rapidly transforming industries, especially in the domains of image processing and healthcare. With the increasing demand for AI-driven tools to enhance diagnostics, automate medical imaging, and improve overall healthcare workflows, there has never been a more critical time to explore the intersection of these fields.
          </p>
          
          <div className="mt-8 grid grid-cols-3 gap-3">
            {/* Industry icons - simplified */}
            <div className="p-3 rounded-md text-center border border-gray-700">
              <div className="text-2xl mb-1">🏥</div>
              <div className="text-xs font-medium text-gray-400">Healthcare</div>
            </div>
            <div className="p-3 rounded-md text-center border border-gray-700">
              <div className="text-2xl mb-1">🖼️</div>
              <div className="text-xs font-medium text-gray-400">Imaging</div>
            </div>
            <div className="p-3 rounded-md text-center border border-gray-700">
              <div className="text-2xl mb-1">🧬</div>
              <div className="text-xs font-medium text-gray-400">Research</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-8 rounded-lg bg-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-white">Target Audience</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Undergraduate, post-graduate, and research scholars in Computer Science, Biomedical Engineering, AI, Data Science, and related fields</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Researchers exploring AI applications in healthcare and image processing</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Healthcare professionals or engineers interested in AI-enhanced clinical practices</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Industry professionals interested in developing generative AI tools for medical applications</span>
            </li>
          </ul>
        </div>
      </motion.div>
      
      {/* Right column - Prominently featured objectives */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="sticky top-24 p-8 rounded-lg bg-gray-800 border border-teal-500/30">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal-400 text-gray-900 flex items-center justify-center text-xl font-bold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-4">Program Objectives</h3>
          
          <div className="space-y-4">
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Introduction to Generative AI</h4>
              <p className="text-sm text-gray-400 mt-1">Introduce participants to generative AI techniques and their applications in image processing and healthcare.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Improving Data Quality</h4>
              <p className="text-sm text-gray-400 mt-1">Explore the intersection of generative AI and image processing for data quality, noise removal, data augmentation, and image reconstruction.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Healthcare Advancements</h4>
              <p className="text-sm text-gray-400 mt-1">Examine the role of generative AI in advancing healthcare through improved medical imaging, diagnostics, and prediction of healthcare outcomes.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Academic Integration</h4>
              <p className="text-sm text-gray-400 mt-1">Enhance the ability of participants to incorporate generative AI methodologies into their research and teaching.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Hands-on Experience</h4>
              <p className="text-sm text-gray-400 mt-1">Provide practical experience with AI tools such as GANs, VAEs, and Transformers through labs and workshops.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Real-world Applications</h4>
              <p className="text-sm text-gray-400 mt-1">Explore use cases including medical imaging, diagnosis automation, personalized treatment planning, and drug discovery.</p>
            </div>
            
            <div className="p-3 border-l-2 border-teal-400 bg-gray-800/50">
              <h4 className="text-base font-semibold text-teal-300">Collaborative Environment</h4>
              <p className="text-sm text-gray-400 mt-1">Build a platform where participants can work on interdisciplinary projects combining AI, healthcare, and image analysis.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Technologies section - simplified */}
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
          { name: "GANs", icon: "🎭", desc: "Generative Adversarial Networks" },
          { name: "VAEs", icon: "🔄", desc: "Variational Autoencoders" },
          { name: "Transformers", icon: "🤖", desc: "Advanced AI Models" },
          { name: "PyTorch", icon: "🔥", desc: "Deep Learning Framework" },
          { name: "TensorFlow", icon: "📊", desc: "Machine Learning Platform" },
          { name: "NVIDIA CUDA", icon: "⚡", desc: "GPU Computing" },
        ].map((tech, index) => (
          <div 
            key={index}
            className="flex flex-col items-center"
          >
            <div className="text-2xl mb-2">{tech.icon}</div>
            <div className="text-sm font-medium text-white">{tech.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

{/* Topics Covered Section */}
<section id="topics" className="py-24 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section title with animation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Curriculum & Topics</h2>
      <div className="w-24 h-1 mx-auto rounded-full bg-teal-400"></div>
      <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
        Our comprehensive curriculum covers key areas in generative AI, with special focus on applications in imaging and healthcare domains.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left column - Topics Covered */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 rounded-lg bg-gray-900 border-t-4 border-teal-400">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Topics Covered by Experts</h3>
          </div>
          
          <ul className="space-y-4">
            {[
              { 
                title: "Introduction to Generative AI", 
                desc: "From Classification to Creation (GANs and VAEs)" 
              },
              { 
                title: "Diffusion Models", 
                desc: "Their types and applications" 
              },
              { 
                title: "Introduction to Transformers", 
                desc: "Their types and applications" 
              },
              { 
                title: "Large Language Models", 
                desc: "Introduction and fine-tuning techniques" 
              },
              { 
                title: "Prompt Engineering", 
                desc: "Chat GPT-3 and Chat GPT-4" 
              },
              { 
                title: "Cross-Modal Collaboration", 
                desc: "Collaboration of Large Language Models and Diffusion Models" 
              },
              { 
                title: "Medical Applications", 
                desc: "Application of Generative models in the medical domain" 
              },
              { 
                title: "Healthcare Innovations", 
                desc: "Generative Models for Drug Design, disease detection, and personalized medicine" 
              },
              { 
                title: "Hands-on Sessions", 
                desc: "Practical application of important topics" 
              },
            ].map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-400/10 text-teal-400 text-xs font-medium mr-3 mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-white font-medium">{topic.title}</h4>
                  <p className="text-sm text-gray-400">{topic.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Right column - Expected Outcomes */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="p-8 rounded-lg bg-gray-900 border-t-4 border-teal-400">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Expected Outcomes</h3>
          </div>
          
          <p className="text-gray-300 mb-6">
            By the end of the event, participants will have gained valuable knowledge and skills that can be applied to their research and professional practice.
          </p>
          
          <ul className="space-y-4">
            {[
              "Gain a comprehensive understanding of generative AI models and their applications in image processing and healthcare.",
              "Be equipped with practical skills to apply these techniques in their research and teaching.",
              "Be able to integrate AI methodologies into their existing research, particularly in healthcare and image processing domains.",
              "Contribute to collaborative projects that explore the intersection of AI, image processing, and healthcare.",
              "Develop real-world, actionable projects aimed at solving healthcare challenges using AI.",
              "Build strong collaborative networks with peers, experts, and industry leaders in AI and healthcare."
            ].map((outcome, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-300">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Program Requirements section - Updated from Difficulty Level */}

      </motion.div>
    </div>
    
    {/* Elegant closing element for the section instead of Format Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 text-center"
    >
      <div className="inline-block mx-auto px-8 py-4 border border-gray-700 rounded-full bg-gray-800/50 backdrop-blur-sm">
        <p className="text-sm text-gray-300">
          <span className="text-teal-400 font-medium">Registration opens April 1, 2025</span> • Limited to 75 participants
        </p>
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
          name: "Dr. Vineeth N Balasubramanian",
          role: "Professor",
          affiliation: "IIT Hyderabad",
          linkedin: "https://www.linkedin.com/",
          website: "https://iith.ac.in/",
          image: "/Vineeth_N_Balasubramanian.jpg"
        },
        {
          name: "Dr. Subramanyam Murala",
          role: "Associate Professor",
          affiliation: "Trinity Dublin, Ireland",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.tcd.ie/",
          image: "/murala.png"
        },
        {
          name: "Dr. Shiv Ram Dubey",
          role: "Assistant Professor",
          affiliation: "IIIT Allahabad",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.iiita.ac.in/",
          image: "/srdubey.jpg"
        },
        {
          name: "Dhiraj Madaan",
          role: "Scientist",
          affiliation: "IBM Research",
          linkedin: "https://www.linkedin.com/",
          website: "https://research.ibm.com/",
          image: "/dhiraj madan.jpg"
        },
        {
          name: "Arijit Roy",
          role: "Scientist",
          affiliation: "TCS Research and Innovation",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.tcs.com/research-and-innovation",
          image: "/Arijit-Roy-5.jpg"
        },
        {
          name: "Dr. Arnab Bhattacharya",
          role: "Professor",
          affiliation: "IIT Kanpur",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.iitk.ac.in/",
          image: "/arnab6.jpg"
        },
        {
          name: "Prof. P K",
          role: "Professor",
          affiliation: "IIIT Hyderabad",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.iiit.ac.in/",
          image: "/pk-2-768x708.jpg"
        },
        {
          name: "Dr. R. B. Pachauri",
          role: "Professor",
          affiliation: "IIT Indore",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.iiti.ac.in/",
          image: "/rbpachauri.jpg"
        },
        {
          name: "Dr. Namrata Rastaugi",
          role: "Chief Data Scientist",
          affiliation: "101GenAI, Managing Director at Engima Ventures",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.101genai.com/",
          image: "/Namrata.jpg"
        },
        {
          name: "Dr. Debdoot Sheet",
          role: "Assistant Professor",
          affiliation: "IIT Kharagpur",
          linkedin: "https://www.linkedin.com/",
          website: "https://www.iitkgp.ac.in/",
          image: "/Debdoot.jpg"
        },
        {
          name: "Prof. G. Narahari Sastry",
          role: "Professor",
          affiliation: "IIT Hyderabad",
          linkedin: "https://www.linkedin.com/",
          website: "https://iith.ac.in/",
          image: "/G._Narahari_Sastry.jpg"
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
                
                {/* Title area */}
                <div>
                  <h3 className="text-lg font-semibold text-white">{speaker.name}</h3>
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
              
              {/* Links row */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                <span className="text-xs text-gray-500"></span>
                <div className="flex space-x-2">
                  <a 
                    href={speaker.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`LinkedIn profile of ${speaker.name}`}
                    className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={speaker.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Website of ${speaker.name}`}
                    className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

{/* Footer Section - Minimalist Design */}
<footer id="footer" className="bg-gray-800 border-t border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="mb-6 md:mb-0">
        <span className="font-bold text-xl text-teal-400">Gen AI Summer School</span>
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

    {/* Divider & Copyright */}
    <div className="border-t border-gray-700/30 mt-8 pt-8">
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