import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Our Story</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Our Story</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Leadership</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Brand</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Brand Kit</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Working at Instagram</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Politics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Reels</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Stories</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">DMs</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Shopping</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Search & Explore</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Safety</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Safety</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Safety Tools</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Privacy Tools</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Account Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Community</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">School Partnerships</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Teen Accounts</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Anti-Bullying</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Parents</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Programs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Threads</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Threads</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Business</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Creators</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="#" className="text-sm text-gray-600 hover:underline">News</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Meta</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Family Center</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Help Center</Link>
        </div>

        <div className="flex gap-4 mb-8">
          {['instagram', 'facebook', 'threads', 'youtube', 'twitter', 'linkedin'].map(platform => (
            <Link
              key={platform}
              href="#"
              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
              aria-label={`${platform} link`}
            >
              <span className="sr-only">{platform}</span>
            </Link>
          ))}
        </div>

        <div className="text-sm text-gray-600 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <Link href="#" className="hover:underline">API</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Sitemap</Link>
          </div>
          <p>Instagram from Meta</p>
          <p>© {new Date().getFullYear()} Instagram</p>
        </div>
      </div>
    </footer>
  );
}
