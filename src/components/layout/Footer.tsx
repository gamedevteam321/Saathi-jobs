import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Job Reels</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Job Reels</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">How It Works</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Career Opportunities</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Fast Job</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Fast Job</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Job Listings</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Application Process</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">For Employers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Fast Train</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Fast Train</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Training Programs</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Skill Development</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Fast Social</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Fast Social</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Connect</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Networking</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Communities</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">True Id</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">True Id</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Verification</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Security</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="#" className="text-sm text-gray-600 hover:underline">About Us</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Our Team</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Advisory Board</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Our Impact</Link>
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
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
