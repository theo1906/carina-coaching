import Link from 'next/link';
import { ArrowRightIcon, UserGroupIcon, SparklesIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function CoachingOfferings() {
  const services = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-rose-600" />,
      title: "Spirituelle Begleitung",
      description: "Entdecke deinen spirituellen Weg und finde innere Weisheit durch intuitive Praktiken.",
      href: "/coaching/spiritual",
      cta: "Mehr erfahren"
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-rose-600" />,
      title: "Body-Centered Coaching",
      description: "Entwicklung tiefer Präsenz und Verbundenheit mit deinem Körper.",
      href: "/coaching/body-centered",
      cta: "Mehr erfahren"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-rose-600" />,
      title: "Heilung durch Präsenz",
      description: "Transformation durch innere Stärke und spirituelle Unterstützung.",
      href: "/coaching/healing",
      cta: "Mehr erfahren"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Mein <span className="font-medium">Ansatz</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ich helfe dir, tiefe innere Heilung zu erfahren und deine innere Weisheit zu entdecken. Meine Methode kombiniert spirituelle Praktiken mit body-centered Coaching, um dir zu helfen, tiefe Verbindungen zu deinem inneren Weisen zu finden und zu leben.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-8"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-rose-50 rounded-xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Link 
                href={item.href}
                className="text-rose-600 hover:text-rose-700 font-medium"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/leistungen" 
            className="inline-flex items-center px-8 py-4 text-base font-medium text-rose-600 hover:text-rose-700 bg-white border-2 border-rose-100 hover:border-rose-200 rounded-full transition-all duration-300"
          >
            Zu den Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
