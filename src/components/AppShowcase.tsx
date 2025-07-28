'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, HeartIcon, ChatBubbleLeftRightIcon, DevicePhoneMobileIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: 'Tägliche Motivation',
    description: 'Erhalte täglich inspirierende Nachrichten und Übungen für mehr Selbstliebe und Achtsamkeit.'
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: 'Meditationen',
    description: 'Entdecke geführte Meditationen für mehr innere Ruhe und Ausgeglichenheit.'
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'Persönliches Tagebuch',
    description: 'Trage deine Gedanken und Fortschritte in dein digitales Tagebuch ein und verfolge deine Entwicklung.'
  },
  {
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    title: 'Frage der Woche',
    description: 'Antworte auf die Frage der Woche und teile deine Erfahrungen mit der Community.'
  }
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };
  
  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
            <span className="block">Dein Begleiter für</span>
            <span className="font-medium bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              mehr Wohlbefinden
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Nimm die 5 Minuten für dich Zeit und konzentriere dich auf dein Geist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Feature Cards - Left Side */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 group ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 shadow-lg' 
                    : 'bg-white hover:bg-pink-50/80 border-l-4 border-transparent hover:border-pink-100 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start">
                  <div className={`h-10 w-10 rounded-xl flex-shrink-0 flex items-center justify-center mr-4 transition-all ${
                    activeIndex === index 
                      ? 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-md' 
                      : 'bg-pink-100 group-hover:bg-pink-200/80'
                  }`}>
                    {React.cloneElement(feature.icon, { 
                      className: `h-5 w-5 ${activeIndex === index ? 'text-white' : 'text-pink-600'}`,
                      strokeWidth: activeIndex === index ? 2.2 : 2
                    })}
                  </div>
                  <div className="py-0.5 flex-1">
                    <h3 className={`text-[15px] font-semibold leading-tight ${
                      activeIndex === index ? 'text-pink-700' : 'text-pink-800/90'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-[13.5px] leading-snug mt-1.5 ${
                      activeIndex === index ? 'text-pink-600' : 'text-pink-600/80'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup - Right Side */}
          <motion.div 
            className="relative flex justify-center lg:sticky lg:top-24 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-[580px] mx-auto">
              {/* Phone Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-2 shadow-2xl ring-2 ring-gray-700/50">
                <div className="relative h-full bg-white rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  {/* App Screen Content */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="h-12 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-between px-4 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-2">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 p-4 overflow-hidden relative">
                      {activeIndex === 0 && (
                        <motion.div
                          key="motivation"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-4 border border-pink-100 shadow-sm">
                            <h3 className="text-lg font-medium text-pink-800">Tagesmotivation</h3>
                            <p className="text-sm text-gray-700 mt-1">
                              "Jeder neue Tag ist eine neue Chance, dein bestes Ich zu sein."
                            </p>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">Heutige Übung</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Nimm dir 5 Minuten Zeit für tiefe Atemzüge und spüre, wie sich dein Körper entspannt.
                            </p>
                          </div>
                        </motion.div>
                      )}
                      
                      {activeIndex === 1 && (
                        <motion.div
                          key="meditation"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Meditation</h3>
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 flex-1 flex flex-col items-center justify-center border border-pink-100 shadow-sm">
                            <div className="w-24 h-24 rounded-full bg-white shadow-inner border-2 border-pink-200 flex items-center justify-center mb-4">
                              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
                                <SparklesIcon className="h-10 w-10 text-pink-600 animate-pulse" />
                              </div>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Tiefenentspannung</h4>
                            <p className="text-sm text-gray-600 text-center mb-6">10 Minuten • Für mehr innere Ruhe</p>
                            <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                              Starten
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {activeIndex === 2 && (
                        <motion.div
                          key="diary"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Mein Tagebuch</h3>
                          <textarea
                            className="flex-1 w-full p-3 text-sm border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            placeholder="Wie fühlst du dich heute?"
                            rows={6}
                          />
                          <button className="mt-3 px-4 py-2 bg-pink-100 text-pink-700 text-sm font-medium rounded-lg hover:bg-pink-200 transition-colors">
                            Speichern
                          </button>
                        </motion.div>
                      )}
                      
                      {activeIndex === 3 && (
                        <motion.div
                          key="weekly-question"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col items-center justify-center"
                        >
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-6 border border-pink-100 shadow-sm">
                            <h3 className="text-lg font-medium text-pink-800">Frage der Woche</h3>
                            <p className="text-sm text-gray-700 mt-1">
                              "Was ist der wichtigste Schritt auf deinem Weg zur Heilung?"
                            </p>
                          </div>
                          <a href="/blog#weekly-question" className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-sm font-medium rounded-lg hover:from-pink-700 hover:to-pink-800 transition-colors flex items-center space-x-2">
                            <span>Zur Frage der Woche</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
