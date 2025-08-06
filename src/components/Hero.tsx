'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update content height when it changes
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isMoreOpen]);

  const toggleDropdown = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const scrollToDropdown = () => {
    if (isMoreOpen && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section className="relative bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Decorative elements - Moved to be part of the content */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2 mb-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="block text-pink-900/80">Carina Coaching</span>
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Embodiment for Women</span>
                  </h1>
                </div>
                
                <div className="space-y-5 pt-6">
                  {[
                    'Lebe in tiefer Verbundenheit mit deinem Körper und dir selbst',
                    'Entfalte dein wahres Potenzial als Frau',
                    'Finde Klarheit über deinen Lebensweg'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full bg-pink-100 border-2 border-gray-800 shadow-sm transform -translate-y-3/4 mr-4"></div>
                      <p className="text-lg text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Kostenloses Erstgespräch buchen
                    <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                  <button 
                    onClick={toggleDropdown}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span>Mehr erfahren</span>
                    <ChevronDownIcon 
                      className={`ml-2 h-5 w-5 transform transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-[500px] lg:h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-[position:0_25%]"
                  style={{
                    backgroundImage: 'url(/images/carina-hero.jpg)'
                  }}
                ></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Dropdown Container */}
      <div ref={containerRef} className="relative overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            height: isMoreOpen ? 'auto' : 0,
            opacity: isMoreOpen ? 1 : 0.5,
            transition: {
              height: { 
                duration: 0.8,  // Increased duration for slower animation
                ease: [0.2, 0.8, 0.2, 1]
              },
              opacity: { 
                duration: 0.6,  // Increased duration for slower fade
                ease: [0.2, 0.8, 0.2, 1]
              }
            }
          }}
          className="w-full overflow-hidden"
          onAnimationComplete={scrollToDropdown}
        >
          <div 
            ref={contentRef}
            className="py-16 relative"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
            </div>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="prose prose-pink max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Hi, ich bin Carina! Ich unterstütze so viele Frauen wie möglich dabei, ihre eigene Heilkraft und Herzensweisheit wiederzuentdecken und mutig zu verkörpern durch spirituelles Coaching und Systemisches-Coaching für Essstörungen und ED Recovery.
                </p>
                
                <div className="space-y-10 mt-12">
                  <div className="relative mb-16">
                    <div className="relative flex flex-col items-center">
                      <div className="text-center">
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              duration: 0.6,
                              ease: [0.2, 0.8, 0.2, 1]
                            }
                          }}
                          className="inline-block text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 relative z-10 px-2"
                        >
                          Möchtest du:
                        </motion.span>
                      </div>
                      <div className="absolute -bottom-4 w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full transform -translate-x-1/2 left-1/2"></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        question: 'In liebevoller Verbindung zu deinem Körper sein?',
                        bg: 'bg-gradient-to-br from-pink-50 to-white',
                        border: 'border-pink-100',
                        accent: 'from-pink-500 to-pink-600',
                        text: 'text-pink-900'
                      },
                      {
                        question: 'Dich nach mehr Leichtigkeit sehnen?',
                        bg: 'bg-gradient-to-br from-purple-50 to-white',
                        border: 'border-purple-100',
                        accent: 'from-purple-500 to-purple-600',
                        text: 'text-purple-900'
                      },
                      {
                        question: 'Dir in deiner Wahrheit begegnen?',
                        bg: 'bg-gradient-to-br from-indigo-50 to-white',
                        border: 'border-indigo-100',
                        accent: 'from-indigo-500 to-indigo-600',
                        text: 'text-indigo-900'
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isMoreOpen ? 1 : 0,
                          y: isMoreOpen ? 0 : 20,
                          transition: { 
                            delay: 0.2 + (index * 0.1),
                            duration: 0.6,
                            ease: [0.2, 0.8, 0.2, 1]
                          }
                        }}
                        className={`group relative p-6 rounded-xl border ${item.border} ${item.bg} overflow-hidden transform transition-all duration-300 hover:shadow-lg`}
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="h-1 w-12 mb-6 rounded-full bg-gradient-to-r opacity-90" style={{ backgroundImage: `linear-gradient(to right, ${item.accent})` }}></div>
                          <p className={`text-lg font-medium leading-relaxed ${item.text}`}>
                            {item.question}
                          </p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                             style={{ backgroundImage: `linear-gradient(to bottom right, ${item.accent})` }}>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gradient fade out at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
