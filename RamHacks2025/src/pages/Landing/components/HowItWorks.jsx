import { Heart, Zap, Apple } from "lucide-react";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const iconMap = { Heart, Zap, Apple };

  return (
    <section className="bg-orange-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}