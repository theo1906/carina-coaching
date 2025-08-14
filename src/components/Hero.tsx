'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-pink-50 to-pink-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-pink-50 to-transparent z-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2 mb-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="block text-pink-900/80">Carina's Coaching</span>
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">für Frauen</span>
                  </h1>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi, ich bin Carina! Ich unterstütze so viele Frauen wie möglich dabei, ihre eigene Heilkraft und Herzensweisheit wiederzuentdecken und mutig zu verkörpern durch spirituelles Coaching und Systemisches-Coaching für Essstörungen und ED Recovery.
                </p>
                
                <div className="space-y-5 pt-2">
                  {[
                    'Entdecke deine wahre weibliche Essenz',
                    'Finde Klarheit über deinen Lebensweg',
                    'Lebe in tiefer Verbundenheit mit dir selbst'
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
                  <Link 
                    href="/ueber-mich#mein-weg" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Mehr über mich
                  </Link>
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
    </section>
  );
}
