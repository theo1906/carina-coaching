import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Durch Carinas Coaching habe ich gelernt, mich selbst zu lieben und zu akzeptieren. Eine lebensverändernde Erfahrung.",
      author: "Anna M.",
      role: "Coaching-Klientin"
    },
    {
      quote: "Die spirituelle Begleitung hat mir geholfen, Blockaden zu lösen, die mich jahrelang zurückgehalten haben. Danke!",
      author: "Sarah K.",
      role: "Spirituelle Begleitung"
    },
    {
      quote: "Die Inner Healing Sessions haben mir gezeigt, wie ich Frieden mit meiner Vergangenheit schließen kann. Unbezahlbar.",
      author: "Julia T.",
      role: "Healing-Klientin"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Was <span className="font-medium">meine Klientinnen</span> sagen
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
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-500">
                {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
