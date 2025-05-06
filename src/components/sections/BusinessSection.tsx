import Link from "next/link";

export default function BusinessSection() {
  return (
    <section className="bg-[#09090B] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 max-w-xl py-5 md:py-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Download</span>
            <br />
            <span className="text-white">our app for Skilling</span>
          </h2>
          <Link
            href="#"
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] text-white font-semibold shadow-lg transition hover:opacity-90"
          >
            <span className="inline-flex text-black items-center gap-2">
              Download Android App
            </span>
          </Link>
        </div>
        {/* Right Side: Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl flex items-center justify-center">
            {/* Placeholder for phone mockup */}
            <span className="text-gray-700 text-lg">Phone Mockup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
