import React from 'react';
import Link from 'next/link';
import { SparklesIcon, HeartIcon, LightBulbIcon, UserGroupIcon, CheckIcon, ArrowRightIcon, ChevronRightIcon, UserCircleIcon, AcademicCapIcon, BookOpenIcon, ClockIcon, FireIcon, ArrowUpRightIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Mein Weg | Carina Göb - Life & Mindset Coaching',
  description: 'Meine persönliche Reise von 20 Jahren Kampf zur spontanen Heilung und wie ich heute andere auf ihrem Weg begleite.',
};

export default function MeinWeg() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Mein Weg
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "VON 20 JAHREN KAMPF ZUR SPONTANEN HEILUNG"
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Meine Geschichte */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Von 20 Jahren Kampf zur spontanen Heilung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "WIE ICH DURCH MEINE EIGENE HEILUNG HEUTE ANDERE BEGLEITE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Ich bin Carina Göb – Spiritual Life Coach & Recovery Coach aus München. Meine Arbeit wurzelt nicht in Theorie, sondern in 20 Jahren persönlicher Erfahrung mit Bulimie.
              </p>
              <p className="text-gray-700 mb-6">
                2016 geschah etwas Unerwartetes: Eine spontane, vollständige und dauerhafte Heilung – ein innerer Wandel, der mein Leben für immer verändert hat. Diese Erfahrung hat mir gezeigt, dass tiefe Transformation möglich ist, wenn wir uns wieder mit der inneren Weisheit unseres Körpers verbinden.
              </p>
              <p className="text-gray-700 mb-8">
                Heute lebe ich frei – verbunden mit meinem Körper, meiner Intuition und meiner weiblichen Kraft. Mein Weg war nicht nur eine Genesung, sondern eine Rückkehr zu mir selbst. Diese Rückverbindung weiterzugeben, ist heute meine Berufung.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kostenlose Beratung vereinbaren
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center p-8">
                  <UserCircleIcon className="h-32 w-32 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mein Ansatz */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Mein Ansatz – Embodiment als Schlüssel zur Transformation
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "DEIN KÖRPER WEISS DEN WEG"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center p-8">
                  <HeartIcon className="h-32 w-32 text-pink-400" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                Heilung geschieht nicht nur im Kopf – sie geschieht durch den Körper. In meinem Coaching arbeiten wir mit Embodiment: bewusste Präsenz im Körper, Entwicklung von Körpervertrauen und die Öffnung für innere Heilung.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  'Deine Körpersignale wieder wahrnehmen',
                  'Emotionale Resilienz aufbauen',
                  'Grenzen setzen lernen',
                  'Spirituelle Praxis in den Alltag integrieren',
                  'Deine weibliche Kraft verkörpern',
                  'Authentische Selbstführung entwickeln'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <CheckIcon className="h-4 w-4 text-pink-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 mb-8">
                Diese Verbindung zu dir selbst ermöglicht echte, nachhaltige Veränderung.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Termin buchen
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Aus gelebter Erfahrung */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Aus gelebter Erfahrung – Warum ich diesen Weg gehe
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "WEIL ICH WEISS, WIE ES SICH ANFÜHLT"
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Ich habe über 20 Jahre mit meiner Essstörung in völliger Isolation gelebt – ohne mit jemandem darüber zu sprechen. Das hat mich tief geprägt. Und genau deshalb ist es mir so wichtig, einen Raum zu schaffen, in dem du dich sicher, gesehen und verstanden fühlst.
            </p>
            <p className="text-gray-700 mb-8">
              Ich bin nicht hier, um dich zu therapieren. Ich bin hier, weil ich selbst gegangen bin, was du vielleicht gerade beginnst. Diese Erfahrung macht meine Arbeit nicht nur authentisch, sondern auch zutiefst menschlich.
            </p>
            <p className="text-xl font-medium text-gray-900 mb-8">
              Heilung ist möglich – auf deine Art, in deinem Tempo. Ich begleite dich dabei.
            </p>
            
            <div className="flex justify-center">
              <Link 
                href="/buchen" 
                className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Kostenloses Kennenlerngespräch
                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meine Philosophie */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Meine Philosophie – Heilung beginnt in dir
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "DU BIST NICHT DEFEKT. DU BIST AUF DEM WEG."
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 mb-8">
              Ich glaube zutiefst: Jeder Mensch trägt die Kraft zur Heilung bereits in sich. Mein Coaching ist kein Reparaturansatz – sondern ein Raum, in dem deine eigene Weisheit wieder Raum bekommt.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <HeartIcon className="h-8 w-8 text-pink-500" />, text: 'Embodiment & Nervensystemregulation' },
                { icon: <LightBulbIcon className="h-8 w-8 text-pink-500" />, text: 'Transformation limitierender Glaubenssätze' },
                { icon: <SparklesIcon className="h-8 w-8 text-pink-500" />, text: 'Spirituelles Inquiry & achtsame Selbsterforschung' },
                { icon: <UserGroupIcon className="h-8 w-8 text-pink-500" />, text: 'Emotionale Selbstregulation & Selbstmitgefühl' },
                { icon: <CheckIcon className="h-8 w-8 text-pink-500" />, text: 'Aufbau innerer Sicherheit und Selbstwirksamkeit' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 mb-8">
              Egal ob du auf körperlicher, emotionaler oder spiritueller Ebene suchst – ich begegne dir mit Klarheit, Erfahrung und Mitgefühl.
            </p>
            
            <div className="flex justify-center">
              <Link 
                href="/buchen" 
                className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Kostenfreie Session buchen
                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Jenseits der Heilung */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Jenseits der Heilung – Ein Leben mit Sinn
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "HEILUNG IST DER ANFANG, NICHT DAS ENDE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Meine persönliche Heilung war der Startpunkt. Danach begann mein Weg des Lernens, Lehrens und Erforschens. Ich habe international mit großartigen Lehrer:innen gearbeitet – in Bali, Italien, der Schweiz – und mein Wissen durch Körperarbeit, Meditation, spirituelle Trainings und Trauma-Arbeit vertieft.
              </p>
              <p className="text-gray-700 mb-8">
                Ich lebe diese Arbeit nicht nur beruflich – sie ist mein Lebensweg. Diese Tiefe, Echtheit und Integrität bringe ich in jede Session mit ein. Heilung ist nie abgeschlossen. Aber sie bringt dich in deine Kraft – und von dort aus kannst du andere inspirieren.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Jetzt buchen
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center p-8">
                  <GlobeAltIcon className="h-32 w-32 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Mein ganzheitlicher Coaching-Ansatz */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Mein ganzheitlicher Coaching-Ansatz
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "KÖRPER, GEIST, HERZ UND SEELE IM EINKLANG"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'IFS (Inneres Familiensystem)',
                description: 'Arbeit mit inneren Anteilen',
                icon: <UserGroupIcon className="h-8 w-8 text-pink-500" />
              },
              {
                title: 'Somatische Körperarbeit',
                description: 'Nervensystem regulieren',
                icon: <HeartIcon className="h-8 w-8 text-pink-500" />
              },
              {
                title: 'Spiritual Inquiry',
                description: 'Tiefe Selbstreflexion & Erkenntnis',
                icon: <LightBulbIcon className="h-8 w-8 text-pink-500" />
              },
              {
                title: 'Rebalancing Körperarbeit',
                description: 'Spannung & Trauma lösen',
                icon: <SparklesIcon className="h-8 w-8 text-pink-500" />
              },
              {
                title: 'Atemarbeit & Meditation',
                description: 'Für innere Ruhe und Klarheit',
                icon: <AcademicCapIcon className="h-8 w-8 text-pink-500" />
              },
              {
                title: 'Präsenztraining',
                description: 'Verankert im Hier und Jetzt',
                icon: <BookOpenIcon className="h-8 w-8 text-pink-500" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Ob es um Trauma, Spiritualität oder Neuausrichtung geht – ich arbeite nicht an Symptomen, sondern mit deinem ganzen Wesen.
            </p>
            
            <Link 
              href="/buchen" 
              className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Kostenfreie Session buchen
              <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Meine Einladung */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Meine Einladung an dich
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "DU BIST NICHT ZUFÄLLIG HIER"
            </p>
            
            <p className="text-gray-700 mb-6">
              Vielleicht stehst du an einem Wendepunkt. Vielleicht spürst du, dass da mehr ist. Vielleicht bist du bereit, dich selbst neu zu entdecken.
            </p>
            
            <p className="text-gray-700 mb-8">
              Was auch immer dich hierher geführt hat – du bist willkommen.
              Du musst nicht perfekt sein, nicht „funktionieren“, um diesen Weg zu gehen.
              Alles, was du brauchst, ist bereits in dir. Ich helfe dir, dich daran zu erinnern.
            </p>
            
            <p className="text-xl font-medium text-gray-900 mb-8">
              Ich lade dich herzlich zu einem kostenfreien Gespräch ein – um herauszufinden, wie embodiment-basiertes Spiritual Coaching dich auf deinem Weg begleiten kann.
            </p>
            
            <div className="flex justify-center">
              <Link 
                href="/buchen" 
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 md:py-4 md:text-lg md:px-12 text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Jetzt Termin vereinbaren
                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
