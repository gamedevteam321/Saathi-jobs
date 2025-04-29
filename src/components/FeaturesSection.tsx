import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Explore What's New",
    description: "Our continuously evolving features empower you to express yourself in new ways.",
    linkText: "Features",
    href: "#"
  },
  {
    title: "Discover Reels",
    description: "Create, share, and watch short, entertaining videos on Instagram.",
    linkText: "Reels",
    href: "#"
  },
  {
    title: "Watch Stories",
    description: "Check out Stories and live videos from your favorite people.",
    linkText: "Stories",
    href: "#"
  },
  {
    title: "Have a conversation",
    description: "Send messages, photos and videos to a friend or select group of people.",
    linkText: "Messenger",
    href: "#"
  },
  {
    title: "Shop what you love",
    description: "Browse the latest trends from your favorite brands and creators.",
    linkText: "Shopping",
    href: "#"
  },
  {
    title: "Find something new",
    description: "Discover content and creators based on your interests.",
    linkText: "Search & Explore",
    href: "#"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={feature.href}
                  className="inline-flex items-center text-gray-700 font-medium text-sm gap-2 hover:underline"
                >
                  {feature.linkText}
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
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl h-96 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  );
}
