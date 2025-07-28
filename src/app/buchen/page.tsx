import dynamic from 'next/dynamic';
import { CalendarIcon, Clock, Check } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

export default function BookingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">Termin buchen</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Buchen Sie ein kostenloses Erstgespräch, um sich besser kennenzulernen
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16">
          <BookingCalendar />

          {/* So funktioniert's Section */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <div className="w-12 h-1 bg-rose-600 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                So funktioniert's
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Einfach und schnell einen Termin buchen
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="bg-white p-4 rounded-2xl shadow-xl">
                    {step === 1 && (
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 mb-2">
                          <CalendarIcon className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Datum wählen</h3>
                        <p className="text-gray-600 mt-1">Wähle ein verfügbares Datum aus dem Kalender aus</p>
                      </div>
                    )}
                    {step === 2 && (
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 mb-2">
                          <Clock className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Uhrzeit auswählen</h3>
                        <p className="text-gray-600 mt-1">Wähle eine verfügbare Uhrzeit für dein gewähltes Datum</p>
                      </div>
                    )}
                    {step === 3 && (
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 mb-2">
                          <Check className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Termin bestätigen</h3>
                        <p className="text-gray-600 mt-1">Bestätige deinen Termin und du erhältst eine Bestätigung per E-Mail</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
