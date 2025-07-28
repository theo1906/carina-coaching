import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon, HeartIcon, LightBulbIcon, UserGroupIcon, CheckIcon, ArrowRightIcon, ChevronRightIcon, UserCircleIcon, AcademicCapIcon, BookOpenIcon, ClockIcon, FireIcon, ArrowUpRightIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Mein Weg | Carina Göb - Life & Mindset Coaching',
  description: 'Meine persönliche Reise von 20 Jahren Kampf zur spontanen Heilung und wie ich heute andere auf ihrem Weg begleite.',
};

export default function MeinWeg() {
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
              "Wie ich lernte, meinem Körper zu vertrauen und zu meiner wahren Stärke fand"
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
              Von 20 Jahren Kampf zur spontanen Heilung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-8">
              "WIE ICH DURCH MEINE EIGENE HEILUNG HEUTE ANDERE BEGLEITE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 max-w-2xl mx-auto md:mx-0 md:pr-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  Meine Reise von der Krise zur Erfüllung
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-lg text-pink-600 mb-3 flex items-center">
                      <UserCircleIcon className="h-5 w-5 mr-2" />
                      Über mich
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Als Spiritual Life & Recovery Coach aus München verbinde ich 20 Jahre persönliche Erfahrung mit Bulimie mit professionellem Coaching.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-lg text-pink-600 mb-3 flex items-center">
                      <SparklesIcon className="h-5 w-5 mr-2" />
                      Meine Wende
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      2016 erlebte ich eine spontane, vollständige Heilung – ein Wendepunkt, der mir zeigte, wie tiefgreifend echte Transformation sein kann.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-lg text-pink-600 mb-3 flex items-center">
                      <HeartIcon className="h-5 w-5 mr-2" />
                      Meine Berufung
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Heute lebe ich in tiefer Verbindung mit mir selbst und helfe anderen, ihre eigene Kraft und innere Weisheit wiederzuentdecken.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Kostenlose Beratung vereinbaren</span>
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
              "DEIN KÖRPER WEISS DEN WEG"
            </p>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Heilung geschieht nicht nur im Kopf – sie geschieht durch den Körper. In meinem Coaching arbeiten wir mit Embodiment: bewusste Präsenz im Körper, Entwicklung von Körpervertrauen und die Öffnung für innere Heilung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Körperwahrnehmung',
                description: 'Deine Körpersignale wieder bewusst wahrnehmen und verstehen lernen',
                icon: <HeartIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Emotionale Resilienz',
                description: 'Stärkung deiner emotionalen Widerstandskraft und inneren Stabilität',
                icon: <SparklesIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              },
              {
                title: 'Grenzen setzen',
                description: 'Gesunde Grenzen erkennen und selbstbewusst kommunizieren',
                icon: <UserCircleIcon className="h-8 w-8 text-fuchsia-600" />,
                color: 'bg-fuchsia-50'
              },
              {
                title: 'Spirituelle Praxis',
                description: 'Alltagstaugliche spirituelle Übungen für mehr Präsenz',
                icon: <LightBulbIcon className="h-8 w-8 text-amber-600" />,
                color: 'bg-amber-50'
              },
              {
                title: 'Weibliche Kraft',
                description: 'Deine weibliche Energie entdecken und authentisch leben',
                icon: <AcademicCapIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Selbstführung',
                description: 'Authentische Führung deines Lebens aus der inneren Weisheit heraus',
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
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
              Diese Verbindung zu dir selbst ermöglicht echte, nachhaltige Veränderung – Schritt für Schritt in deinem Tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Meine Heilungsreise - Interactive Timeline */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Meine Heilungsreise
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
                  
                  {/* Data Line - Adjusted y-coordinates for better emotional representation */}
                  <polyline 
                    points="0,280 100,260 200,320 300,360 400,300 500,200 600,100 700,40 800,20" 
                    fill="none" 
                    stroke="url(#line-gradient)" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                  
                  {/* Data Points - Adjusted y-coordinates to show progression */}
                  {[
                    { x: 0, y: 280, label: 'Geburt', description: 'Der Anfang meiner Reise' },
                    { x: 100, y: 260, label: 'Kindheit', description: 'Erste Herausforderungen' },
                    { x: 200, y: 320, label: 'Jugend', description: 'Beginn der Essstörung' },
                    { x: 300, y: 360, label: 'Erwachsen', description: 'Tiefpunkt erreicht' },
                    { x: 400, y: 300, label: 'Wendepunkt', description: 'Erste Schritte zur Heilung' },
                    { x: 500, y: 200, label: 'Wachstum', description: 'Neue Wege entdecken' },
                    { x: 600, y: 100, label: 'Heilung', description: 'Selbstakzeptanz wächst' },
                    { x: 700, y: 40, label: 'Durchbruch', description: 'Neue Perspektiven' },
                    { x: 800, y: 20, label: 'Heute', description: 'In meiner Kraft angekommen' }
                  ].map((point, index) => (
                    <g key={index} className="group cursor-pointer transition-all duration-200 hover:opacity-100" style={{ opacity: 0.8 }}>
                      <circle 
                        cx={point.x} 
                        cy={point.y} 
                        r="6" 
                        fill={index === 8 ? "#EC4899" : "#9CA3AF"}
                        className="transition-all duration-200 group-hover:r-8 group-hover:fill-rose-500"
                      />
                      <text 
                        x={point.x} 
                        y={point.y - 15} 
                        textAnchor="middle" 
                        className="text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        {point.label}
                      </text>
                      <foreignObject 
                        x={point.x - 120} 
                        y={point.y + 25} 
                        width="240" 
                        height="100"
                        className="pointer-events-none"
                      >
                        <div className="text-center transform transition-all duration-300 ease-out group-hover:scale-100 scale-95">
                          <div className="inline-block bg-white px-5 py-3 rounded-xl shadow-xl border-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                            <p className="text-base font-semibold text-rose-700 mb-1">{point.label}</p>
                            <div className="w-10 h-0.5 bg-gradient-to-r from-rose-200 to-fuchsia-200 mx-auto my-2"></div>
                            <p className="text-sm text-gray-600 leading-tight">{point.description}</p>
                          </div>
                        </div>
                      </foreignObject>
                    </g>
                  ))}
                  
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#F43F5E" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                  <span className="text-sm text-gray-600">Geburt</span>
                  <span className="text-sm text-gray-500">Kindheit</span>
                  <span className="text-sm text-gray-600">Jugend</span>
                  <span className="text-sm text-gray-500">Erwachsen</span>
                  <span className="text-sm text-rose-500 font-medium">Heute</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Fahren Sie mit der Maus über die Punkte, um mehr über meine Reise zu erfahren.
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
              Jede Reise hat ihren eigenen Rhythmus. Meine führte durch Höhen und Tiefen, bis ich schließlich meinen Weg zu wahrer Freiheit und Selbstakzeptanz fand.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-300"></span>
            </div>
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
        </div>
      </section>

      {/* Section 5: Mein Weg zu dir */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0">
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
                  Ich begegne dir mit der gleichen Ehrlichkeit und Verletzlichkeit, die ich mir selbst in meinem Heilungsprozess gewünscht hätte. Keine Floskeln, kein oberflächliches Coaching – sondern echte Begegnung auf Augenhöhe.
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
                  Termin vereinbaren
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Was dich erwartet</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Sichere Umgebung', text: 'Ein Raum ohne Bewertung, in dem du ganz du selbst sein kannst.' },
                    { title: 'Individueller Ansatz', text: 'Kein Schema F – wir finden gemeinsam, was für dich funktioniert.' },
                    { title: 'Praktische Werkzeuge', text: 'Konkrete Übungen, die du sofort in deinen Alltag integrieren kannst.' },
                    { title: 'Nachhaltige Veränderung', text: 'Keine schnellen Lösungen, sondern echte, tiefgreifende Transformation.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckIcon className="h-4 w-4 text-rose-500" />
                      </div>
                      <div>
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

      {/* Section 5: Jenseits der Heilung - Redesigned */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 rounded-full mb-4">Mein Weg</span>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Jenseits der Heilung
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-rose-700/90 italic max-w-2xl mx-auto">
              "Heilung ist der Anfang, nicht das Ende"
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-100 to-fuchsia-100 flex items-center justify-center">
                      <SparklesIcon className="h-6 w-6 text-rose-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Meine Reise des Lernens</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Meine persönliche Heilung war erst der Anfang. Danach begann mein Weg des Lernens, Lehrens und Erforschens. Internationale Erfahrungen in Bali, Italien und der Schweiz haben meinen Horizont erweitert und meinen Ansatz geprägt.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-rose-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Körperarbeit</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden</p>
                  </div>
                  
                  <div className="bg-fuchsia-50 p-4 rounded-xl border border-fuchsia-100">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-fuchsia-100 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-fuchsia-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Spirituelle Entwicklung</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Tiefe Verbindung zu deinem inneren Selbst und höherem Bewusstsein</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 p-8 rounded-2xl h-full flex items-center transform transition-all duration-300 hover:shadow-lg">
                <div className="text-center w-full">
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-rose-600" />
                    </div>
                      <div className="h-48 w-48 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <div className="relative">
                        <GlobeAltIcon className="h-16 w-16 text-rose-500" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <div className="h-2 w-2 bg-rose-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-rose-900 mb-4">Internationale Erfahrung</h3>
                    <p className="text-gray-600 mb-6">
                      Geprägt von Lehren aus Bali, Italien, der Schweiz und darüber hinaus
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="px-3 py-1 text-sm bg-white text-rose-700 rounded-full border border-rose-100">Bali</span>
                      <span className="px-3 py-1 text-sm bg-white text-fuchsia-700 rounded-full border border-fuchsia-100">Italien</span>
                      <span className="px-3 py-1 text-sm bg-white text-rose-600 rounded-full border border-rose-100">Schweiz</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-100 rounded-full opacity-30"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-fuchsia-100 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-0.5">
              <span className="font-medium">Entdecke deinen Heilungsweg</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

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
                items: ['Somatische Körperarbeit', 'Rebalancing', 'Atemarbeit'],
                icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
                bgGradient: 'from-rose-50 to-rose-50',
                textColor: 'text-rose-500',
                iconColor: 'text-rose-500'
              },
              {
                title: 'Geist & Psyche',
                items: ['Inneres Familiensystem (IFS)', 'Spiritual Inquiry', 'Präsenztraining'],
                icon: <LightBulbIcon className="h-8 w-8 text-fuchsia-500" />,
                bgGradient: 'from-fuchsia-50 to-fuchsia-50',
                textColor: 'text-fuchsia-500',
                iconColor: 'text-fuchsia-500'
              },
              {
                title: 'Spiritualität',
                items: ['Meditation', 'Bewusstseinsarbeit', 'Energiearbeit'],
                icon: <SparklesIcon className="h-8 w-8 text-purple-500" />,
                bgGradient: 'from-purple-50 to-purple-50',
                textColor: 'text-purple-500',
                iconColor: 'text-purple-500'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-6 bg-gradient-to-r ${category.bgGradient}`}>
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 mx-auto">
                    {React.cloneElement(category.icon, { className: `h-8 w-8 ${category.iconColor}` })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className={`h-5 w-5 ${category.textColor} mr-2`} />
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

      {/* Section 7: Dein nächster Schritt */}
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
                Vielleicht stehst du an einem Wendepunkt. Vielleicht spürst du, dass da mehr ist. Vielleicht bist du bereit, dich selbst neu zu entdecken.
              </p>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <p className="text-lg text-rose-900 font-medium mb-2 text-center">
                  Was auch immer dich hierher geführt hat – du bist willkommen.
                </p>
                <p className="text-gray-700 text-center">
                  Du musst nicht perfekt sein, nicht „funktionieren“, um diesen Weg zu gehen. Alles, was du brauchst, ist bereits in dir. Ich helfe dir, dich daran zu erinnern.
                </p>
              </div>
              
              <p className="text-lg font-medium text-rose-900 text-center mb-8">
                Ich lade dich herzlich zu einem kostenfreien Gespräch ein – um herauszufinden, wie ich dich auf deinem Weg begleiten kann.
              </p>
              
              <div className="flex justify-center mt-8">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="mr-2">Jetzt Termin vereinbaren</span>
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
