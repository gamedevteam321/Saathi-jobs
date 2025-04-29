import Link from "next/link";

export default function DownloadAppSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-6">
            Download for iOS/Android.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://apps.apple.com/app/apple-store/id389801252">
              <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center text-white text-xs">
                App Store Download
              </div>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.instagram.android">
              <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center text-white text-xs">
                Google Play Download
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
