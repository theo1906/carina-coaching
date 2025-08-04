import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import CoachingOfferings from '@/components/CoachingOfferings';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { ClockIcon, HeartIcon, LightBulbIcon, UserGroupIcon, ShieldCheckIcon, UserIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import RaumFuerDichSection from '@/components/RaumFuerDichSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 w-full">
        <Hero />
        <RaumFuerDichSection />
        
        <div className="relative">
          {/* Wer bin ich Section */}
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-pink-50">
            <div className="absolute inset-0">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
                  Wer bin ich
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
                <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
                  "INNERE TRANSFORMATION DURCH KÖRPERLICHE PRÄSENZ"
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-pink-100">
                    <p className="font-medium text-pink-800 mb-3">Meine spirituelle Reise</p>
                    <ul className="space-y-3">
                      {[
                        'Entdeckung meines inneren Lichts',
                        'Tiefe Verbindung zur Weisheit des Körpers',
                        'Integration spiritueller Praktiken in den Alltag',
                        'Begleitung anderer auf ihrem Heilungsweg'
                      ].map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-600"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-pink-100">
                    <p className="text-gray-700 leading-relaxed">
                      Als spirituelle Lebensberaterin begleite ich Frauen auf ihrem Weg zur Selbstfindung und persönlichen Entwicklung. Meine eigene spirituelle Reise hat mich gelehrt, wie wichtig es ist, die innere Weisheit zu hören und die tiefen Verbindungen zwischen Körper, Seele und Geist zu erkennen.
                    </p>
                    <div className="flex items-center space-x-4 mt-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 p-2">
                        <HeartIcon className="h-8 w-8 text-pink-600" />
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        "In der Stille meines Herzens habe ich gelernt, dass wahre Kraft in der Präsenz liegt."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-white/90 to-white/70 p-8 rounded-3xl shadow-xl border border-pink-100">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-pink-900">
                        Meine Methode
                      </h3>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center">
                        <SparklesIcon className="h-8 w-8 text-pink-600" />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-gray-800 leading-relaxed">
                        Meine Methode kombiniert spirituelle Praktiken mit body-centered Coaching, um dir zu helfen, tiefe Verbindungen zu deinem inneren Weise zu finden und zu leben. Diese ganzheitliche Herangehensweise ermöglicht es dir, deinen wahren Weg zu finden und dein volles Potenzial zu entfalten.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          'Intuitive Praktiken',
                          'Body-Centered Meditation',
                          'Heilung durch Präsenz',
                          'Integration spiritueller Tools'
                        ].map((point: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <div className="flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center mr-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-pink-600"></div>
                            </div>
                            <span className="text-gray-700">{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <p className="text-gray-600 text-sm">
                          "Die Kraft der Präsenz und der Verbindung zu deinem inneren Weisen ist der Schlüssel zu tiefer Heilung und persönlicher Transformation."
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/about"
                    className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Coachings Section */}
          <section className="relative py-24 overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50">
              <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6">
                  Coachings
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
                <p className="text-2xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
                  "SPIRITUELLER WEG UND KÖRPERLICHE TRANSFORMATION"
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-white/95 p-10 rounded-3xl shadow-xl border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 p-2 mb-8">
                    <HeartIcon className="h-8 w-8 text-pink-600" />
                  </div>
                  <p className="text-2xl font-bold text-pink-900 mb-4">
                    Spiritual Life Coaching - Awaken and Trust Your Inner Wisdom
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mb-6"></div>
                  <p className="text-gray-700 mb-10 text-lg">
                    Entdecke deinen spirituellen Weg und finde innere Weisheit durch body-centered Praktiken und spirituelle Begleitung.
                  </p>
                  <ul className="space-y-5">
                    {[
                      'Tiefe innere Heilung',
                      'Verbundenheit mit deinem Wesen',
                      'Transformation durch Präsenz',
                      'Integration spiritueller Praktiken'
                    ].map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center mr-4">
                          <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                        </div>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/coaching/spiritual" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors mt-8">
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>

                <div className="bg-white/95 p-10 rounded-3xl shadow-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 p-2 mb-8">
                    <SparklesIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-purple-900 mb-4">
                    Essstörungen Coaching - Heilung von innen heraus
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mb-6"></div>
                  <p className="text-gray-700 mb-10 text-lg">
                    Holistische Unterstützung bei Essstörungen durch Körperbewusstsein und spirituelle Heilung.
                  </p>
                  <ul className="space-y-5">
                    {[
                      'Körperliche Präsenz',
                      'Heilung von Essstörungen',
                      'Verbundenheit mit dem Körper',
                      'Spirituelle Unterstützung'
                    ].map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center mr-4">
                          <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        </div>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/coaching/eating-disorders" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors mt-8">
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <StorySection />
          <CoachingOfferings />
          <AppShowcase />
          <Testimonials />
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
