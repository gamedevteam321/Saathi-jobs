import Link from "next/link";

export default function BusinessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Grow with us
            </h2>
            <p className="text-gray-600 mb-6">
              Share and grow your brand with our diverse, global community.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-gray-800 font-medium gap-2 hover:underline"
            >
              Business
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

          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
