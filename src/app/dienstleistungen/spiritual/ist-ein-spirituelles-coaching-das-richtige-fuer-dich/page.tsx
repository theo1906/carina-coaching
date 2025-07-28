import { ArrowRightIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Ist ein spirituelles Coaching das Richtige für Dich? | Carina Göb',
  description: 'Entdecke, ob ein spirituelles Coaching der richtige Weg für dich ist, um deine innere Kraft zu entfalten und dein volles Potenzial zu leben.',
};

export default function IstEinSpirituellesCoachingDasRichtigeFuerDichPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-9f2cdda6a2d6?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/60"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ist ein spirituelles Coaching das Richtige für Dich?
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-pink max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-gray-700">
                Deine spirituelle Coaching Reise ist eine innere Reise. Eine Reise zu dir, in deine Kraft, in deinen Körper, in dein Herz, in die Verbindung mit deiner Seele und mit deinem Frausein.
              </p>

              <p className="text-gray-700">
                Entdecke deine Essenz, deinen wahren Wesenskern, und die Qualitäten deiner Weiblichkeit auf ganz natürliche Art und Weise von innen heraus zu entfalten.
              </p>

              <p className="text-gray-700">
                Erforsche deine Muster und Strategien, um tiefer in dein Bewusstsein einzutauchen - in den Raum in dir, in dem du genau richtig bist, so wie du bist. Erfahre, wie es sich anfühlt, mehr und mehr in allen Bereichen deines Lebens als auch in deinem Körper in Präsenz und Verbundenheit mit dir zu sein und die Kraft und die Ressourcen deines Frauseins in Balance mit deiner männlichen Energie zu leben.
              </p>

              <p className="text-gray-700">
                Verkörpere das, was du dir wünschst und bring deine Energie in das, was dir wichtig ist. Erkenne, dass du es bist, die immer die Wahl hat und die entscheiden kann, mutig für sich loszugehen und inspiriere andere dasselbe zu tun.
              </p>

              <div className="p-6 my-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
                <p className="text-gray-700 italic">
                  "Mein Weg in die Selbstheilung und auch der Prozess danach auf der Suche nach meiner eigenen Identität und was mir in meinem Leben wirklich wichtig ist, nachdem ich mich 20 Jahre in meiner Essstörung verloren hatte, ist meine größte Stärke und Super-Power."
                </p>
              </div>

              <p className="text-gray-700">
                Die gesammelten Erfahrungen sind die Essenz meiner Arbeit und mein Ansatz für ein erfülltes SEIN im eigenen Körper, dem Zuhause deiner Seele und damit für ein erfülltes Leben.
              </p>

              <p className="text-gray-700">
                Ich bin hier, um all das mit dir zu teilen. Du musst diesen Weg nicht alleine gehen.
              </p>

              <p className="text-gray-700">
                Spirituelles Coaching unterstützt dich dabei, dein Herz zu öffnen und wieder ganz in Verbindung mit dir selbst zu sein - mit deinem Körper und mit deiner weiblichen Kraft.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-0.5">
              <div className="bg-white rounded-[15px] p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 mb-6">
                  <SparklesIcon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bereit für den ersten Schritt?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Vereinbare jetzt dein kostenloses Kennenlerngespräch und entdecke, wie ich dich auf deinem spirituellen Weg unterstützen kann.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">Kostenloses Kennenlerngespräch</span>
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
