import { Apple } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Apple className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold text-orange-600">NutriBlend</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Features</a>
          <a href="#" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#" className="hover:text-orange-500 transition">About</a>
        </nav>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors">
          Get Started
        </button>
      </div>
    </header>
  )
}