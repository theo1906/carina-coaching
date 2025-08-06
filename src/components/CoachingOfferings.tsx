'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserGroupIcon, SparklesIcon, BookOpenIcon, ChevronDownIcon, ChevronUpIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CoachingOfferings() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const services = [
    {
      icon: <UserGroupIcon className="h-8 w-8 text-rose-600" />,
      title: "Heilung durch Mut zur Wahrheit",
      description: "Transformation durch Mut zur radikalen Ehrlichkeit, dir selbst gegenüber und mit innerer Entschlossenheit.",
      hasDropdown: false
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-rose-600" />,
      title: "Körperzentriertes Coaching",
      description: "Entwicklung tiefer Präsenz und Verbundenheit mit deinem Körper durch körperorientierte Übungen, Achtsamkeitstraining, Körperwahrnehmung und Atemtechniken.",
      dropdownContent: (
        <div className="mt-4 pl-2">
          <ul className="space-y-2 text-gray-600 text-sm list-disc pl-5">
            <li className="leading-relaxed">KörperBewusstSein und Körperpräsenz zu entwickeln und dich sicher zu fühlen im eigenen Körper</li>
            <li className="leading-relaxed">Emotionale Resilienz und Selbstregulierung, in dem du deine Gefühle bewusst da sein lässt und wahrnimmst anstatt sie zu unterdrücken</li>
            <li className="leading-relaxed">Ein positives Selbstbild zu entwickeln und zu verkörpern und dein Vertrauen in dich und das Leben zu stärken</li>
            <li className="leading-relaxed">Klare und gesunde Grenzen zu setzen</li>
            <li className="leading-relaxed">Dich mit deiner weiblichen Kraft zu verbinden und im Einklang mit deinem Zyklus zu leben</li>
            <li className="leading-relaxed">Negative, limitierende Glaubenssätze zu transformieren und dich für neue Möglichkeiten zu öffnen</li>
          </ul>
        </div>
      )
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-rose-600" />,
      title: "Spirituelle Begleitung",
      description: "Spirituelles Wachstum und Entwicklung deiner intuitiven Fähigkeiten. Erwecke deine innere Weisheit und lerne, deiner Intuition zu vertrauen.",
      hasDropdown: false
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
            Mein Ansatz
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Entdecke, wie du durch gezieltes Coaching dein volles Potenzial entfalten kannst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-8 flex flex-col h-full"
            >
              <div>
                <div className="h-12 w-12 flex items-center justify-center bg-rose-50 rounded-xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dropdown content that appears below all boxes */}
        <div className="mt-8 text-center">
          <div 
            className="inline-flex items-center text-pink-600 hover:text-pink-700 cursor-pointer mb-2 transition-colors font-medium"
            onClick={toggleExpand}
          >
            <span>
              {isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}
            </span>
            {isExpanded ? (
              <ChevronUpIcon className="h-5 w-5 ml-1" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            )}
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            aria-hidden={!isExpanded}
          >
            <div className="mt-6">
              <div className="text-gray-700 max-w-6xl mx-auto text-lg space-y-6 text-left bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 text-lg">Körperzentriertes Coaching</h4>
                    {services[1].dropdownContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 italic">
            Wenn du Heilung auf zellulärer, körperlicher Ebene integrierst, wird Transformation zu einer "gefühlten Realität" und bleibt nicht nur ein intellektuelles Verstehen eines Konzepts. Diese neue Wirklichkeit speichert sich tief in deinem Körpergedächtnis und Nervensystem ab und ist daher nachhaltig und bleibend.
          </p>
        </div>
      </div>

      {/* New Focus Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
            Der Fokus meiner Arbeit
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Spiritual Life Coaching */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-rose-100">
            <div className="flex items-center mb-6">
              <div className="h-12 w-1.5 bg-gradient-to-b from-rose-400 to-fuchsia-400 rounded-full mr-4"></div>
              <h3 className="text-2xl font-medium text-rose-900">Spirituelles Life Coaching</h3>
            </div>
            <p className="text-rose-800/90 mb-4">Unterstützt Frauen dabei:</p>
            <ul className="space-y-3 text-rose-900/90">
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Sich selbst besser kennenzulernen und Selbstzweifel zu transformieren</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Eine eigene spirituelle Praxis und innere Verbindung aufzubauen</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Empowerment, Freude und Leichtigkeit zu spüren durch loslassen von Angst, Scham und Schuldgefühlen</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Sinn und Bestimmung im Leben zu finden</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Beziehungen authentischer zu leben</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Einschneidende Veränderungen im Leben zu meistern</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Spiritualität im Alltag und im Job zu integrieren</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Eine gesunde Work-Life Balance zu etablieren und einem Burnout vorzubeugen</span>
              </li>
            </ul>
          </div>

          {/* ED Recovery Coaching */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-rose-100">
            <div className="flex items-center mb-6">
              <div className="h-12 w-1.5 bg-gradient-to-b from-rose-400 to-fuchsia-400 rounded-full mr-4"></div>
              <h3 className="text-2xl font-medium text-rose-900">Coaching für Essstörungen und ED-Recovery</h3>
            </div>
            <p className="text-rose-800/90 mb-4">Unterstützt Frauen bei:</p>
            <ul className="space-y-3 text-rose-900/90">
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Bulimie, Binge Eating oder Magersucht und dem individuellen Weg in die Heilung und Recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Emotionalem Essverhalten und Unwohlsein im eigenen Körper</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Entwicklung eines positiven Selbstbildes, Körperwahrnehmung und -Akzeptanz</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Familiensystem-Heilung bei Essstörungen</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-3">•</span>
                <span>Die eigene Identität abseits der Essstörung zu erforschen und zu verkörpern</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      </section>

      {/* New Section: Dein intuitiver Weg in die Heilung */}
      <section className="relative w-full py-16 md:py-20">
        <div className="absolute inset-0 -z-10 w-screen h-full bg-gradient-to-b from-white to-purple-50" style={{ left: '50%', transform: 'translateX(-50%)', width: '100vw' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Dein intuitiver Weg in die Heilung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Mein Ansatz vereint Intuition und Feinfühligkeit mit zertifiziertem Wissen und ganzheitlichen, körperorientierten Methoden.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Systemisches Coaching</h4>
                    <p className="text-gray-600 text-sm">Aufstellungsarbeit innere Anteile und innere Kindheilung</p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Somatische Körperarbeit</h4>
                    <p className="text-gray-600 text-sm">Rebalancing Bodywork zur Nervensystem-Regulation und Auflösung von gespeicherten Emotionen</p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">„Inquiry"-Methode</h4>
                    <p className="text-gray-600 text-sm">Für tiefe, nachhaltige Prozesse der Selbstreflexion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Embodiment</h4>
                    <p className="text-gray-600 text-sm">Für Körperpräsenz und Verbindung zum authentischen Selbst</p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Energiearbeit</h4>
                    <p className="text-gray-600 text-sm">Entwicklung von Bewusstsein für Energie-Intelligenz und -Zentren im Körper, um Blockaden zu lösen und den Energiefluss zu harmonisieren</p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-pink-50">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-pink-600">•</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Meditation & Achtsamkeit</h4>
                    <p className="text-gray-600 text-sm">Praktiken zur Steigerung des Wohlbefindens und der Lebensqualität</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                Gemeinsam stimmen wir jede Session auf deine ganz persönlichen Bedürfnisse ab, respektieren dein Tempo und schaffen einen Raum, in dem du dich sicher und gehalten fühlst auf deinem Weg in die Heilung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
