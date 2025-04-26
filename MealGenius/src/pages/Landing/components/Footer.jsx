import { Apple } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Apple className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-orange-600">NutriBlend</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-orange-500">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Terms</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Contact</a>
          </div>
        </div>
        <p className="text-center mt-12 text-gray-500">
          © {new Date().getFullYear()} NutriBlend. All rights reserved.
        </p>
      </div>
    </footer>
  )
}