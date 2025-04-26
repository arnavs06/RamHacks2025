// src/pages/landing/components/Testimonials.jsx
import { FaHeart } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote: "Finally a plan I can stick to! The meals are delicious and easy to make.",
    author: "Sarah K.",
    stars: 5
  },
  {
    quote: "As a vegan with allergies, this app saved me so much time.",
    author: "Alex M.",
    stars: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Loved by Users</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className="border p-6 rounded-xl">
            <div className="flex gap-1 text-orange-500 mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <FaHeart key={i} className="w-4 h-4" />
              ))}
            </div>
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <p className="font-medium">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}