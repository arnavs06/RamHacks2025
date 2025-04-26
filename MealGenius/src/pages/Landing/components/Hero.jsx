export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold max-w-3xl leading-tight">
        Your Perfect <span className="text-orange-500">Diet Plan</span>, Tailored Just for You
      </h1>
      <p className="text-xl mt-6 text-gray-600 max-w-2xl">
        Tell us your tastes, restrictions, and goals—we'll handle the rest!
      </p>
      <div className="mt-10 flex gap-4">
        <button className="px-8 py-6 text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-md">
          Create My Plan
        </button>
        <button className="px-8 py-6 text-lg border border-orange-500 text-orange-500 rounded-md">
          Learn More
        </button>
      </div>
      <div className="mt-16 w-full max-w-4xl h-64 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl"></div>
    </section>
  )
}