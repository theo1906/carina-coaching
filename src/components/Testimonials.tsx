'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
  };

  const testimonials = [
    {
      quote: "Mit Carina fühlte ich mich sofort wohl und sicher. Sie schafft einen Raum, in dem ich mich vollkommen frei gefühlt habe und in dem ich fühlen konnte, ohne Impuls von Außen - einfach das, was aus meinem Inneren kam.",
      fullText: "Ich hatte ein Thema mit meiner Mama, eine der wichtigsten und stärksten Frauen in meinem Leben, aber gleichzeitig eine der Menschen, die mich am meisten verletzt hat, enttäuscht hat, benachteiligt hat, nicht adäquat behandelt und verstanden hat. Zumindest in meiner Wahrnehmung. Es ist hart, das so niederzuschreiben, aber aus der Wut, die ich anfänglich nur hatte, haben sich viele einzelne Gefühle und Situationen differenziert, durch die Anwesenheit, Anleitung und Unterstützung von Carina. Ich wollte eine Erklärung, warum meine Mutter meine Schwestern mir vorzieht und eine Legitimation, wütend zu sein. Bekommen habe ich hingegen einen differenzierten Blumenstrauß an Gefühlen, Sichtweisen und Impulsen. Keine einfache Lösung für eine Symptomatik, aber eine komplexe und der Situation angemessene Methode, mit diesem Thema umzugehen und weiter zu arbeiten.\n\nCarina hat es mit ihrer Art und Art zu arbeiten geschafft, dass ich mich komplett entspannen und frei machen konnte von allen Alltagsgedanken. Dass ich im Moment sein konnte, mich getraut habe, alle Emotionen zu äußern, wie sie gerade aus meinem Körper purzelten, egal ob mit Lachen, mit Tränen, mit Worten oder in imaginären Bildern.\n\nDas Coaching bei Carina war unglaublich und unglaublich intensiv, aber gleichzeitig befreiend und entlastend. Das Gefühl der Glücklichkeit hat sich nach ein paar Tagen und Wochen eingestellt, immer wieder und schleichend, aber stetig immer mehr werdend. Die Nachhaltigkeit und der Nachhall beeindrucken mich bis heute.\n\nSo ein Coaching ist nichts, was man in der Mittagspause zwischen zwei Terminen macht. Ein Coaching bei Carina ist eine intensive Investition in das eigene Seelenheil, der Start einer Reise die man alleine nie beginnen würde bzw. beginnen kann, denn ohne Reiseführerin sieht man immer nur die offensichtlichen Attraktionen, aber nie die geheimen Ecken, die es lohnt zu betrachten.\n\nAlles in allem kann ich dir, Carina, nur DANKE sagen, für diese Erfahrung, für dein Feingefühl, deinen Raum, deine zarte, aber stützende und starke Anwesenheit und deine Empathie. Danke für den Beginn einer guten Reise zurück zu mir selbst!",
      author: "Andrea, 34",
      role: "Coaching-Klientin"
    },
    {
      quote: "Kurz vor einem Burnout habe ich den Weg zu Carina gefunden und mich für ein Online Coaching Packet angemeldet. Ich war zunächst etwas skeptisch, aber ja - auch online funktioniert wunderbar!",
      fullText: "Carina hat für mich einen sicheren Raum gehalten, wo ich mir erlaubt habe mich komplett zu zeigen mit allem was ist. Durch ihre Feinfühligkeit und gezielten Fragen hat sie mir geholfen meine wiederkehrenden Muster im Leben sehr deutlich zu erkennen und dadurch auch direkt beim Schopf zu packen. Carina hat sehr schnell mit mir heraus gearbeitet, wo meine Kernthemen liegen und was meine Strategien sind, um den darunter liegenden Schmerz nicht fühlen zu müssen.\n\nIn unseren 8 Stunden Coaching durfte ich erfahren wie es sich anfühlt sich verletzlich zu zeigen und trotzdem gehalten zu sein. Ich habe mein Vertrauen in mich und die Kraft in mir wieder entdeckt, sodass ich nach kurzer Zeit wieder \"lebensfähig\" war. Carina hat es mir ermöglicht, dass ich mutig in mich hinein gefühlt habe und Gefühle zulassen konnte, die ich sonst immer unterdrückt habe.\n\nIch kann mich nun abgrenzen und trotzdem öffnen. Dafür werde ich dir immer dankbar sein liebe Carina und möchte deine Coachings gerne von Herzen weiterempfehlen. Die Entscheidung mit dir zu arbeiten ist eine wertvolle Investition in sich selbst und unsere Sessions haben mir geholfen, mich noch besser kennenzulernen. Seitdem gehe ich gefühlt entspannter durch mein Leben, in liebevoller Verbundenheit mit meinem Körper und in dem tiefen Wissen und Gefühl von innen heraus: ich bin gut so wie ich bin.",
      author: "Martina, 53",
      role: "Online Coaching-Klientin"
    },
    {
      quote: "Das Coaching mit Carina war für mich ein ganz besonderer Prozess. Mein Anliegen und Ziel war es mich besser abgrenzen zu können, vor allem in der Beziehung zu meinen Eltern.",
      fullText: "In den Sitzungen durfte ich mich auf eine neue, tiefere Weise mit mir selbst verbinden. Carina hat einen sicheren Container geschaffen, in dem alles da sein durfte: leise Zweifel, alte Verletzungen, aber auch meine Stärke, mein Mut und mein Wunsch nach Entwicklung.\n\nIch habe mich in diesem Raum sehr gesehen und verstanden gefühlt – als ganzer Mensch, mit allem, was da ist. Besonders berührt hat mich, wie ich im Laufe des Coachings eine tiefe, innere Entschlossenheit spüren konnte – nicht nur im Kopf, sondern auch im Herzen und im Bauch. Obwohl ich dazu neige, viel im Kopf zu sein, hat Carina es geschafft, auch meine Körper- und Energieebene achtsam mit einzubeziehen.\n\nIch weiß jetzt, dass diese Stärke in mir da ist, und ich probiere, mich im Alltag immer wieder bewusst mit ihr zu verbinden. Das hilft mir ganz konkret dabei, meine Grenzen klarer wahrzunehmen und in meinen Beziehungen achtsamer für mich einzustehen und meine Bedürfnisse offen zu kommunizieren. Auch gegenüber meinen Eltern.\n\nIch durfte verschiedene innere Anteile kennenlernen und verstehen – nicht mit dem Ziel, sie zu bewerten, sondern um ihnen Raum zu geben. Dabei habe ich auch erkannt, wie sehr ich eigene Erfahrungen manchmal klein rede – und wie heilsam es ist, ihnen Raum zu geben und sie liebevoll anzunehmen. Das hat mir geholfen, mehr Klarheit über mich selbst zu gewinnen und mit mir selbst mitfühlender zu werden.\n\nDas war für mich der Schlüssel für jede weitere Transformation in mir und für tiefere Heilung. Carina hat mich darin bestärkt, mich auch verletzlich zu zeigen – in einem Raum, der vollkommen wertfrei und getragen war. Ihre Arbeit geht spürbar über reines Wissen hinaus. Ich konnte immer wieder sehr deutlich fühlen, egal ob in unseren persönlichen Session oder Online, dass Carina nicht nur einen Beruf ausübt, sondern ihre Berufung lebt. Danke, Carina, für deine Tiefe, deine Klarheit und deine achtsame Präsenz.",
      author: "Paula, 31",
      role: "Coaching-Klientin"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Was meine Klient:innen sagen
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className={`transition-all duration-300 overflow-hidden ${allExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="pt-4 border-t border-gray-200 text-gray-700">
                  {testimonial.fullText && testimonial.fullText.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={toggleAll}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors duration-200"
          >
            {allExpanded ? (
              <>
                <span>Weniger Erfahrungsberichte anzeigen</span>
                <ChevronUpIcon className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                <span>Mehr Erfahrungsberichte anzeigen</span>
                <ChevronDownIcon className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
