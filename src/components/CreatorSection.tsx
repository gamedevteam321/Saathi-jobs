import Link from "next/link";

export default function CreatorSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-40 h-56 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              </div>
              <div className="relative w-40 h-56 overflow-hidden rounded-lg mt-10">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stand out on Instagram
            </h2>
            <p className="text-gray-600 mb-6">
              Connect with more people, build influence, and create compelling content that's distinctly yours.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-gray-800 font-medium gap-2 hover:underline"
            >
              Creators
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
