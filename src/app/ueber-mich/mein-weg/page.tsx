'use client';

export function generateMetadata({ params }: { params: any }) {
  return {
    title: 'Mein Weg | Carina Göb - Life & Mindset Coaching',
  };
}

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  SparklesIcon, 
  HeartIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  CheckIcon, 
  ArrowRightIcon, 
  UserCircleIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  ClockIcon, 
  FireIcon, 
  ArrowUpRightIcon, 
  GlobeAltIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import RaumFuerDichSection from '@/components/RaumFuerDichSection';
import VisionCollapsible from '@/components/VisionCollapsible';
import CollapsibleSection from '@/components/CollapsibleSection';
import MeineWendeSection from '@/components/MeineWendeSection';
import MeineBerufungSection from '@/components/MeineBerufungSection';
import SummaryCollapsible from '@/components/SummaryCollapsible';
import TimelineCollapsible from '@/components/TimelineCollapsible';

interface TimelinePoint {
  year: number;
  y: number;
  title: string;
  description: string;
  emotionalValue: number;
  isSplit: boolean;
  isPositive?: boolean;
  isExpanded?: boolean;
  [key: string]: any; // For any additional properties
}

const initialTimelinePoints: TimelinePoint[] = [
  { 
    year: 1989, 
    y: 280, 
    title: 'Kindheitstrauma', 
    description: 'Ich lief um mein Leben, nachdem ein Spiel gefährlich wurde. Die Drohung meines Elternteils ließ mich glauben: Wenn ich mich zeige, bin ich in Lebensgefahr.',
    emotionalValue: -5,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 1996, 
    y: 300, 
    title: 'Bulimie beginnt', 
    description: 'Nach meinem ersten Rausch entdeckte ich das Erbrechen als Ventil. Die Bulimie wurde zu meinem täglichen Begleiter, verborgen hinter tiefer Scham.',
    emotionalValue: -4,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2001, 
    y: 260, 
    title: 'Kontrollverlust', 
    description: 'Ich verlor völlig die Kontrolle – Autounfälle, Alkoholprobleme und völlige emotionale Isolation.',
    emotionalValue: -3,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2003, 
    y: 220, 
    title: 'Flucht nach Australien', 
    description: 'Die Reise fühlte sich an wie Freiheit, doch gleichzeitig rutschte ich in Drogen ab und erlebte einen sexuellen Übergriff. Ich kehrte körperlich und seelisch ausgelaugt zurück.',
    emotionalValue: -2,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2009, 
    y: 140, 
    title: 'Erste Liebe', 
    description: 'Ich verliebte mich tief und fühlte mich zum ersten Mal gesehen, gehalten und bedingungslos geliebt.',
    emotionalValue: 2,
    isSplit: true,
    isPositive: true,
    isExpanded: false
  },
  { 
    year: 2009, 
    y: 300, 
    title: 'Versteckte Wahrheit', 
    description: 'Trotz der Liebe verbarg ich weiterhin meine Bulimie – aus Angst und Scham. Ich lebte in einer Co-Abhängigkeit und zeigte nicht mein wahres Ich.',
    emotionalValue: -3,
    isSplit: true,
    isPositive: false,
    isExpanded: false
  },
  { 
    year: 2014, 
    y: 340, 
    title: 'Zusammenbruch', 
    description: 'Die Trennung kam völlig unerwartet. Kurz darauf verlor ich meinen Job und unser Zuhause – alles brach gleichzeitig zusammen.',
    emotionalValue: -5,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2015, 
    y: 160, 
    title: 'Entscheidung zur Heilung', 
    description: 'Am Strand in Australien fasste ich den Entschluss: Ich werde heilen, bewusst essen und unabhängig leben – oder gar nicht mehr zurückkehren.',
    emotionalValue: 0,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2016, 
    y: 140, 
    title: 'Erste Schritte', 
    description: 'Ich stellte mich meiner größten Angst und zog in meine erste selbst finanzierte Wohnung. Es war beängstigend – aber auch befreiend.',
    emotionalValue: 1,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2018, 
    y: 120, 
    title: 'Wahrheit leben', 
    description: 'Ich trennte mich aus Selbstachtung und erzählte meinen Eltern zum ersten Mal von meiner Essstörung. Ich gab Scham und Schuld zurück.',
    emotionalValue: 2,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2019, 
    y: 100, 
    title: 'Heilung teilen', 
    description: 'In einem Inner-Child-Workshop auf Bali teilte ich zum ersten Mal nach 23 Jahren öffentlich meine Geschichte. Es war tief heilend.',
    emotionalValue: 3,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2024, 
    y: 80, 
    title: 'Neuer Weg', 
    description: 'Auf einer Reise wurde mir klar: Ich gehe raus aus dem Konzern und stehe sichtbar zu meiner Geschichte. Coaching ist mein Weg.',
    emotionalValue: 4,
    isSplit: false,
    isExpanded: false
  },
  { 
    year: 2025, 
    y: 60, 
    title: 'Carina Coaching', 
    description: 'Ich gründete Carina Coaching, um Frauen bei ihrer Heilung zu begleiten – aus meiner eigenen Tiefe, Wahrheit und Erfahrung heraus.',
    emotionalValue: 5,
    isSplit: false,
    isExpanded: false
  }
];

export default function MeinWeg() {
  const [timelinePoints, setTimelinePoints] = useState<TimelinePoint[]>(initialTimelinePoints);

  const handleTimelinePointClick = (index: number) => {
    const updatedPoints = timelinePoints.map((point, i) => ({
      ...point,
      // Toggle the clicked point and close all others
      isExpanded: i === index ? !point.isExpanded : false
    }));
    setTimelinePoints(updatedPoints);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-rose-900 mb-6">
              Mein Weg
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl text-rose-800/90 italic max-w-3xl mx-auto mb-8 leading-relaxed">
              "Wie ich gelernt habe, meinem Körper zu vertrauen und meine innere Kraft zu erwecken."
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Meine Geschichte */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Spiritueller Life Coach und ED Recovery Coach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-8">
              "Von 20 Jahren Kampf zur Heilung über Nacht: WIE ICH DURCH MEINE EIGENE HEILUNG HEUTE ANDERE BEGLEITE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 max-w-2xl mx-auto md:mx-0 md:pr-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  Meine Reise von der Krise in die Heilung und Selbstliebe
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  <CollapsibleSection />
                  
                  <MeineWendeSection />
                  <MeineBerufungSection />
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Kostenloses Erstgespräch vereinbaren</span>
                  <span className="ml-3 relative z-10">
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative pb-[100%] h-0 w-full">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                  <Image
                    src="/images/carina-portrait.jpeg"
                    alt="Carina Göb - Spiritual Life Coach"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mein Ansatz */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-rose-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Ansatz – Embodiment als Schlüssel zur Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto mb-12">
              "DEIN KÖRPER KENNT DEN WEG"
            </p>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Heilung geschieht nicht alleine mit Entschlossenheit im Kopf – sie geschieht vor allem über den Körper und im Nervensystem. In meinem Coaching arbeiten wir mit Embodiment: bewusste Präsenz im Körper, Entwicklung von Körpervertrauen und die Öffnung für innere Heilung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Körperwahrnehmung',
                description: 'Deine Körpersignale wieder bewusst wahrnehmen und verstehen lernen durch aktives Hinfühlen.',
                icon: <HeartIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Emotionale Resilienz',
                description: 'Stärkung deiner emotionalen Widerstandskraft, deiner Fähigkeit zur Selbstregulierung und inneren Stabilität.',
                icon: <SparklesIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              },
              {
                title: 'Grenzen setzen',
                description: 'Gesunde Grenzen erkennen und selbstbewusst kommunizieren.',
                icon: <UserCircleIcon className="h-8 w-8 text-fuchsia-600" />,
                color: 'bg-fuchsia-50'
              },
              {
                title: 'Spirituelle Praxis',
                description: 'Alltagstaugliche, spirituelle Übungen für mehr Präsenz in deinem Körper und in deinem Leben.',
                icon: <LightBulbIcon className="h-8 w-8 text-amber-600" />,
                color: 'bg-amber-50'
              },
              {
                title: 'Weibliche Kraft',
                description: 'Deine weibliche Energie entdecken und authentisch leben.',
                icon: <AcademicCapIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Selbstführung',
                description: 'Dein Leben bewusst und aus deiner inneren Weisheit heraus gestalten.',
                icon: <BookOpenIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <SummaryCollapsible />
        </div>
      </section>

      {/* Section 3: Meine Quelle im Coaching - Meine Erfahrung - Interactive Timeline */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Meine Quelle im Coaching - Meine Erfahrung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto">
              "VOM ANFANG BIS HEUTE - MEINE REISE ZU MIR SELBST"
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="relative h-[400px] w-full">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between">
                <span className="text-sm font-medium text-gray-600">Hoch</span>
                <span className="text-sm text-gray-500">Mittel</span>
                <span className="text-sm text-gray-600">Tief</span>
              </div>
              
              {/* Main Chart Area */}
              <div className="absolute left-12 right-0 top-0 bottom-0">
                <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="80" x2="800" y2="80" stroke="#F3F4F6" strokeWidth="1" />
                  <line x1="0" y1="200" x2="800" y2="200" stroke="#F3F4F6" strokeWidth="1" />
                  <line x1="0" y1="320" x2="800" y2="320" stroke="#F3F4F6" strokeWidth="1" />
                  
                  {/* Original connecting line */}
                  <polyline 
                    points={timelinePoints
                      .sort((a, b) => a.year - b.year) // Ensure points are in chronological order
                      .map(point => {
                        const minYear = 1989;
                        const maxYear = 2025;
                        const range = maxYear - minYear;
                        const x = ((point.year - minYear) / range) * 800;
                        return `${x},${point.y}`;
                      })
                      .join(' ')
                    }
                    fill="none" 
                    stroke="url(#line-gradient)" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
              
              {/* Data Points with emotional values */}
              {timelinePoints.map((point, index) => {
                // Calculate x position based on year (1989-2025)
                const minYear = 1989;
                const maxYear = 2025;
                const range = maxYear - minYear;
                const x = ((point.year - minYear) / range) * 800;
                    
                    return (
                      <g key={`${point.year}-${point.isSplit ? (point.isPositive ? 'pos' : 'neg') : 'main'}`} 
                         className="pointer-events-none group transition-all duration-200" 
                         style={{ opacity: 0.8 }}>
                        <circle 
                          cx={x} 
                          cy={point.y} 
                          r={point.isExpanded ? 8 : 6} 
                          fill={point.emotionalValue >= 0 ? "#EC4899" : "#8B5CF6"}
                          className={`transition-all duration-200 cursor-pointer hover:r-8 ${point.isExpanded ? 'ring-4 ring-opacity-30' : ''} ${
                            point.emotionalValue >= 0 ? 'hover:fill-rose-500' : 'hover:fill-violet-500'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTimelinePointClick(index);
                          }}
                          style={{ pointerEvents: 'auto' }}
                        />
                        <text 
                          x={x} 
                          y={point.y - 15} 
                          textAnchor="middle" 
                          className="text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                            {point.year}
                          </text>
                        
                        {/* Tooltip */}
                        <foreignObject 
                          x={x - 150} 
                          y={point.y + (point.isSplit && !point.isPositive ? 40 : 25)} 
                          width="300" 
                          height="auto"
                          className="pointer-events-auto z-20"
                        >
                          <div className="text-left transform transition-all duration-200 ease-out group-hover:scale-100 scale-95">
                            <div className={`inline-block bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-100 ${point.isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-200 transform ${point.isExpanded ? 'translate-y-0' : 'translate-y-1'}`}>
                              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45 z-30"></div>
                              <div className="relative z-40 bg-white">
                                <p className="text-sm font-medium text-gray-800">
                                  {point.title} ({point.year})
                                </p>
                                
                                {/* Collapsible description */}
                                <div className={`mt-1 overflow-hidden transition-all duration-200 ${point.isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                                  <div className="pt-2">
                                    <p className="text-sm text-gray-600">{point.description}</p>
                                  </div>
                                </div>
                                
                                <button 
                                  className="mt-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTimelinePointClick(index);
                                  }}
                                >
                                  {point.isExpanded ? 'Weniger' : 'Mehr'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}
                  
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                  <span className="text-sm text-gray-600">1989</span>
                  <span className="text-sm text-gray-500">1996</span>
                  <span className="text-sm text-gray-600">2001</span>
                  <span className="text-sm text-gray-500">2003</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-rose-500 font-medium">2009</span>
                    <span className="text-xs text-gray-400">Wendepunkt</span>
                  </div>
                  <span className="text-sm text-gray-500">2014</span>
                  <span className="text-sm text-gray-600">2015</span>
                  <span className="text-sm text-gray-500">2018</span>
                  <span className="text-sm text-gray-600">2019</span>
                  <span className="text-sm text-rose-500 font-medium">2025</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Klicke auf die Punkte, um mehr über meine Heilungsreise zu erfahren.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                  <span className="text-sm text-gray-600">Vergangenheit</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-rose-500 mr-2"></span>
                  <span className="text-sm text-rose-600 font-medium">Heute</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Jede Reise hat ihren eigenen Rhythmus. Meine führte mich durch viele Höhen und Tiefen, bis ich meinen Weg in die Freiheit und Selbstliebe gefunden habe.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-300"></span>
            </div>
            
            <TimelineCollapsible />
          </div>
        </div>
      </section>

      {/* Section 4: Meine Vision & Philosophie */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
              Meine Vision & Philosophie
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-4"></div>
            <p className="text-lg text-rose-800/90 italic max-w-2xl mx-auto">
              "WENN WIR UNS SELBST HEILEN, HEILEN WIR DIE WELT"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-fuchsia-100 flex items-center justify-center mb-4 mx-auto">
                <HeartIcon className="h-6 w-6 text-fuchsia-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Deine innere Weisheit</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ich helfe dir, deine eigene innere Stimme wiederzuentdecken und ihr zu vertrauen – denn du trägst alle Antworten bereits in dir.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 p-6 rounded-xl border border-rose-100">
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-4">Mein Ansatz</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Achtsame Körperwahrnehmung' },
                  { text: 'Emotionale Selbstregulation' },
                  { text: 'Spirituelle Selbsterforschung' },
                  { text: 'Praktische Werkzeuge' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 mx-auto">
                <LightBulbIcon className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Ganzheitliche Heilung</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ein Ansatz, der Körper, Geist und Seele gleichermaßen einbezieht, für tiefgreifende und nachhaltige Veränderung.
              </p>
            </div>
          </div>
          <VisionCollapsible />
        </div>
      </section>

      {/* Section 5: Mein Raum für dich */}
      <RaumFuerDichSection />

      {/* Section 6: Mein Ansatz */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein ganzheitlicher Ansatz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic">
              "KÖRPER, GEIST, HERZ UND SEELE IM EINKLANG"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Körperarbeit',
                description: 'zur Nervensystem-Regulation und Auflösung von gespeicherten Emotionen',
                items: ['Somatische Körperarbeit', 'Rebalancing Massage', 'Atemarbeit'],
                icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
                bgGradient: 'from-rose-50 to-rose-50',
                textColor: 'text-rose-500',
                iconColor: 'text-rose-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col'
              },
              {
                title: 'Geist & Psyche',
                description: 'Systemisches Coaching: Aufstellungsarbeit innere Anteile',
                items: [
                  'Inquiry - Methode für tiefe, nachhaltige Prozesse der Selbstreflexion',
                  'Mindfulness- und Präsenztraining'
                ],
                icon: <LightBulbIcon className="h-8 w-8 text-fuchsia-500" />,
                bgGradient: 'from-fuchsia-50 to-fuchsia-50',
                textColor: 'text-fuchsia-500',
                iconColor: 'text-fuchsia-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col justify-between h-full'
              },
              {
                title: 'Spiritualität',
                items: [
                  'Geführte Meditation',
                  'Bewusste Wahrnehmung: Verbindung zu dem Raum in dir, in dem du einfach nur bist',
                  'Energiearbeit: Entwicklung von Bewusstsein für Energie-Intelligenz und -Zentren im Körper'
                ],
                icon: <SparklesIcon className="h-8 w-8 text-purple-500" />,
                bgGradient: 'from-purple-50 to-purple-50',
                textColor: 'text-purple-500',
                iconColor: 'text-purple-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col'
              }
            ].map((category, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ${category.minHeight || ''}`}>
                <div className={`p-6 bg-gradient-to-r ${category.bgGradient} flex-1 flex flex-col`}>
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 mx-auto">
                    {React.cloneElement(category.icon, { className: `h-8 w-8 ${category.iconColor}` })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{category.title}</h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 text-center mb-3">{category.description}</p>
                  )}
                  <ul className={`${category.title === 'Geist & Psyche' ? 'space-y-0' : 'space-y-2'} ${category.contentClass || ''}`}>
                    {category.items.map((item, i) => (
                      <li key={i} className={`flex items-start ${i === 0 && category.title === 'Geist & Psyche' ? 'mt-8' : ''} ${i === 1 && category.title === 'Geist & Psyche' ? 'mt-1' : ''}`}>
                        <CheckIcon className={`h-5 w-5 ${category.textColor} mr-2 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Mein Weg zu dir */}
      <section className="relative py-20 md:py-28 bg-rose-50">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Weg zu dir
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto">
              "AUTHENTIZITÄT VERBINDET – AUF AUGENHÖHE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Mein Versprechen an dich</h3>
                <p className="text-gray-700 mb-4">
                  Ich begegne dir mit dem Verständnis und Mitgefühl, das ich mir selbst in meinem Heilungsprozess gewünscht habe. Und mit meiner Liebe zur Wahrheit und für echte, ehrliche Begegnung auf Augenhöhe durch verkörperte Präsenz.
                </p>
                <p className="text-gray-700">
                  Ich teile nicht nur Wissen, sondern echte Erfahrung. Ich war dort, wo du vielleicht gerade stehst. Ich kenne die Ängste, die Zweifel, aber auch die Hoffnung, die dich hierher geführt hat.
                </p>
              </div>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <h4 className="font-medium text-rose-900 mb-2">Dein nächster Schritt</h4>
                <p className="text-gray-700 mb-4">
                  Du musst diesen Weg nicht alleine gehen. Ich lade dich ein, dich für ein unverbindliches Gespräch anzumelden, in dem wir herausfinden können, ob ich die richtige Begleiterin für dich bin.
                </p>
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  kostenloses Erstgespräch vereinbaren
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Was dich erwartet</h3>
                <ul className="space-y-4">
                  {[
                    { 
                      title: 'Sichere Umgebung', 
                      text: 'Ein Raum ohne Bewertung, in dem du ganz du selbst sein kannst.' 
                    },
                    { 
                      title: 'Individueller & holistischer Ansatz', 
                      text: 'Kein Schema F – wir erforschen gemeinsam, was für dich funktioniert.' 
                    },
                    { 
                      title: 'Spirituelle Entwicklung', 
                      text: 'Tiefe Verbindung zu deinem wahren Selbst und höherem Bewusstsein' 
                    },
                    { 
                      title: 'Körperarbeit', 
                      text: 'Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden' 
                    },
                    { 
                      title: 'Praktische Werkzeuge', 
                      text: 'Konkrete Übungen, die du sofort in deinen Alltag integrieren kannst' 
                    },
                    { 
                      title: 'Nachhaltige Veränderung', 
                      text: 'Keine schnellen Lösungen, sondern echte, tiefgreifende Transformation' 
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckIcon className="h-3.5 w-3.5 text-rose-500" />
                      </div>
                      <div className="text-sm">
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Dein nächster Schritt */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                Dein nächster Schritt
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
              <p className="text-xl text-rose-800/90 italic mb-8">
                "DER ERSTE SCHRITT IST IMMER DER WICHTIGSTE"
              </p>
            </div>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700">
                Vielleicht stehst du an einem Wendepunkt. Vielleicht spürst du, dass da mehr ist. Vielleicht bist du bereit, dich selbst wahrhaftig zu entdecken.
              </p>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <p className="text-lg text-rose-900 font-medium mb-2 text-center">
                  Was auch immer dich hierher geführt hat – du bist willkommen.
                </p>
                <p className="text-gray-700 text-center">
                  Heilung ist möglich - in jedem Moment.
                  Du musst nicht perfekt sein, nicht „funktionieren“, um diesen Weg zu gehen. Alles, was du brauchst, ist bereits in dir. Ich helfe dir, dich daran zu erinnern. Du bist unendlich kraftvoll und schöpferisch.
                  Du musst diesen Weg nicht alleine gehen.
                </p>
              </div>
              
              <p className="text-lg font-medium text-rose-900 text-center mb-8">
                Ich lade dich herzlich zu einem kostenfreien, unverbindlichen Gespräch ein – um herauszufinden, ob ich dich auf deinem Weg begleiten kann.
              </p>
              
              <div className="flex justify-center mt-8">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="mr-2">kostenloses Erstgespräch vereinbaren</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
