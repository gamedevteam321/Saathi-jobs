import Link from "next/link";

export default function CommunitySection() {
  return (
    <section
      id="about"
      className="bg-amber-100 py-16 md:py-24"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl mb-6 text-amber-900">
            We're committed to fostering a safe and supportive community for everyone
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-amber-900 font-medium gap-2 hover:underline"
          >
            Community
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
    </section>
  );
}
