import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Embodiment & Heilung | Carina Göb',
  description: 'Entdecke, wie du durch Embodiment und Heilung wieder in Verbindung mit deinem Körper kommst und dein volles Potenzial entfaltest.',
};

export default function EmbodimentUndHeilungPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Embodiment & Heilung
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 italic">
              "OWN IT. FEEL IT. HEAL IT."
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="leading-relaxed">
              Dein Körper speichert alle Schmerzen und Verletzungen – selbst die unsichtbaren. Diese gespeicherten Erfahrungen sind wertvolle Hinweise auf die Anteile in dir, die Heilung brauchen, um wieder in Verbindung mit dir selbst zu kommen.
            </p>

            <p className="leading-relaxed">
              Unverheilte Wunden machen sich auf verschiedene Weisen bemerkbar:
            </p>

            <ul className="space-y-3 pl-5 my-6">
              <li>Durch Überlebensstrategien, Selbstsabotage und den ständigen Kampf mit deinem Körper</li>
              <li>Durch das Gefühl, nicht wirklich du selbst sein zu können</li>
            </ul>

            <p className="leading-relaxed">
              Tief in dir spürst du diese Trennung von dem, wonach du dich sehnst: Echte Verbindung. Und diese beginnt immer bei dir selbst.
            </p>

            <div className="my-12 p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Heilung beginnt dort, wo wir uns erlauben, uns selbst in unserer ganzen Tiefe zu begegnen – mit all unseren Verletzungen, Ängsten und Sehnsüchten. Es ist ein Akt des Mutes, sich dem zu stellen, was war, um das zu werden, was wir wirklich sind."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-pink-700 mt-12 mb-6">Dein Weg zur Ganzheit</h2>

            <p className="leading-relaxed">
              Ich helfe dir, deine Körperwahrnehmung zu stärken und ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln.
            </p>

            <div className="my-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">OWN IT.</h3>
                  <p className="text-gray-700">Nimm an, was ist – deine Geschichte, deine Gefühle, deinen Körper, so wie er jetzt ist.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">FEEL IT.</h3>
                  <p className="text-gray-700">Spüre in deinen Körper hinein, lass die Gefühle zu, ohne sie zu bewerten.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">HEAL IT.</h3>
                  <p className="text-gray-700">Erlaube dir, alte Muster loszulassen und neue, heilsame Wege zu beschreiten.</p>
                </div>
              </div>
            </div>

            <p className="leading-relaxed">
              In meiner Arbeit verbinden wir körperliche Wahrnehmungsübungen mit tiefenpsychologischen Ansätzen, um die Wurzeln deiner Muster zu verstehen und aufzulösen. Du lernst, deinen Körper als Kompass zu nutzen und deine Bedürfnisse klarer zu erkennen.
            </p>

            <p className="leading-relaxed">
              Gemeinsam schaffen wir einen sicheren Raum, in dem du dich öffnen und zeigen kannst – ganz so, wie du bist. Ohne Maske, ohne Anpassung, ohne dich verstellen zu müssen.
            </p>

            <p className="leading-relaxed mt-8">
              <span className="font-semibold">Dein Körper ist dein Zuhause.</span> Wenn du dich darin nicht wohlfühlst, wirst du dich nirgendwo wirklich zu Hause fühlen. Deshalb lade ich dich ein, deinen Körper wieder als Verbündeten zu entdecken – als Ort der Weisheit, Kraft und Heilung.
            </p>

            {/* Call to Action */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Bereit für den nächsten Schritt?</h3>
              <p className="text-gray-700 mb-6">
                Wenn du bereit bist, dich auf diese Reise der Heilung und Selbstentdeckung zu begeben, lass uns gemeinsam starten.
              </p>
              <Link 
                href="/kontakt" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-pink-600 hover:text-pink-700 transition-colors group"
              >
                <span>Kostenloses Erstgespräch vereinbaren</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
