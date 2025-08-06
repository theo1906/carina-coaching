'use client';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const coachingPackages = [
  {
    title: 'Synergy',
    description: '„Ich vertraue meiner Kraft“',
    price: '444€',
    features: [
      '4 Stunden Coaching',
      'Persönlicher Kompass zum Kennenlernen Deiner inneren Landkarte',
      'Praktische Übungen zur emotionalen Selbstregulation',
      'Bereit für den ersten Schritt? Gibt es ein Thema, das dich momentan besonders beschäftigt oder eine Situation, die sich in deinem Leben immer wiederholt und du möchtest gerne den ersten Schritt gehen Richtung Selbsterforschung und „gelöst SEIN“? Einstieg in dein inneres System, erkenne dein Kernmuster und erwecke die Kraft in dir für deinen Weg.'
    ],
  },
  {
    title: 'Infinite Balance',
    description: '„Ich ruhe in meiner Mitte“',
    price: '800€',
    features: [
      '8 Stunden Coaching',
      'Gelebtes Gleichgewicht durch Integration und Ausgleich Deiner inneren Dynamiken',
      'Intensives körperorientiertes Begleitprogramm',
      'Ressourcen orientierte geführte Meditationen inkl. Recording',
      'Wöchentlicher Check-in',
      'Bereit für nachhaltige Transformation auf allen Ebenen? Wir vertiefen deine Erkenntnisse über deine Kernmuster und Hauptpersönlichkeitsanteile, erforschen zugrunde liegende Strategien im Ursprung und bringen deine inneren Ressourcen und Talente in den Fokus als bewusster Anker in all deinen Lebensbereichen. Du erfährst deine Trigger als Wachstumsmöglichkeiten zu verstehen und zu erforschen für innere Harmonie und tiefe Heilung.'
    ],
  },
  {
    title: 'Wholeness',
    description: '„Ich bin erfüllt“',
    price: '1.122€',
    features: [
      '12 Stunden Coaching',
      'Körpervertrauen, Herzverbundenheit und achtsame Präsenz, um Dich mutig und in entspannter Zuversicht für neue Wege zu öffnen',
      'Exklusives körperorientiertes Begleitprogramm',
      'Ressourcen orientierte geführte Meditationen inkl. Recording',
      'Wöchentlicher Check In',
      'Exklusive Community Coaching Calls Online',
      'Bereit für die Wunder in deinem Leben? Durch die tiefe Verbundenheit zu dir und deinem Körper, die Auflösung deiner Kernmuster und Strategien im Ursprung hin zu kraftvollen, positiven Glaubenssätzen über dich und deinen wahren Wert als Frau und einer etablierten spirituellen Alltagspraxis, sendest du auf einer Frequenz von Vertrauen, Liebe und Leichtigkeit - bereit dein volles Potenzial zu entfalten, Fülle zu empfangen und mutig los zu gehen für dich und dem was dir in deinem Leben wichtig ist.'
    ],
  },
  {
    title: 'Healing Home',
    description: 'Individuelles Angebot auf Anfrage',
    price: '150€',
    features: [
      '1 Stunde Coaching',
      'Rebalancing Bodywork',
      'Oder Kombination aus beidem',
      'Stadtgebiet München'
    ],
  },
];

const HealingHomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="text-center mt-16">
      <h3 className="text-2xl font-bold text-gray-900">Healing Home</h3>
      <p className="mt-2 text-gray-600">Individuelles Angebot auf Anfrage</p>
      
      <div className="mt-6 max-w-md mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <span>Details anzeigen</span>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {isOpen && (
          <div className="mt-2 px-4 py-3 bg-gray-50 rounded-md">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 1 Stunde Coaching</li>
              <li>• Rebalancing Bodywork</li>
              <li>• Oder Kombination aus beidem</li>
              <li>• Stadtgebiet München</li>
              <li className="font-semibold mt-2">150,- Euro</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Angebot() {
  const [isHealingHomeOpen, setIsHealingHomeOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Preise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Wähle zwischen mehreren kürzeren oder weniger längeren Sitzungen. Die Gesamtstundenanzahl bleibt gleich, die Aufteilung entscheidest du selbst.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {coachingPackages.filter(pkg => pkg.title !== 'Healing Home').map((packageItem) => (
              <div key={packageItem.title} className="p-8 bg-white shadow-2xl rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900">{packageItem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{packageItem.description}</p>
                <p className="mt-4 text-3xl font-bold text-primary-600">{packageItem.price}</p>
                <ul role="list" className="mt-6 space-y-4">
                  {packageItem.features.map((feature, index) => {
                    const isLastItem = index === packageItem.features.length - 1;
                    return (
                      <li key={feature} className={isLastItem ? 'mt-4' : 'flex gap-x-3'}>
                        {!isLastItem && <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />}
                        <span className="text-sm leading-6 text-gray-600">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Kostenloses Erstgespräch buchen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Home Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900">Healing Home</h3>
            <p className="mt-1 text-gray-600">Individuelles Angebot auf Anfrage</p>
            
            <div className="mt-6">
              <button
                onClick={() => setIsHealingHomeOpen(!isHealingHomeOpen)}
                className="flex items-center justify-center mx-auto text-sm text-rose-600 hover:text-rose-700 transition-colors"
              >
                <span>Details anzeigen</span>
                <ChevronDownIcon 
                  className={`ml-1.5 w-4 h-4 transform transition-transform ${isHealingHomeOpen ? 'rotate-180' : ''}`} 
                  aria-hidden="true"
                />
              </button>
              
              {isHealingHomeOpen && (
                <div className="mt-4 space-y-3 text-center text-gray-600">
                  <p>1 Stunde Coaching</p>
                  <p>Rebalancing Bodywork</p>
                  <p>Oder Kombination aus beidem</p>
                  <p>Stadtgebiet München</p>
                  <p className="mt-4 font-medium text-gray-900">150,- Euro</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Dein erstes Gespräch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Lass uns gemeinsam deinen persönlichen Weg entdecken
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 rounded-lg hover:from-rose-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Kostenloses Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
