import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-gray-800 h-16 md:block max-sm:hidden">
      <div className="mx-auto mh-auto max-w-5xl px-8 max-sm:px-4 center">
        <nav className="h-full flex justify-center">
          <Link className="text-white font-bold px-3 hover:bg-sky-700 block pt-5" href="/">
            HOME
          </Link>
          <Link className="text-white font-bold px-3 hover:bg-sky-700 block pt-5" href="/about">
            ABOUT US
          </Link>
          <Link className="text-white font-bold px-3 hover:bg-sky-700 block pt-5" href="/capabilities">
            CAPABILITIES
          </Link>
          <Link className="text-white font-bold px-3 hover:bg-sky-700 block pt-5" href="/safety">
            SAFETY AND STANDARDS
          </Link>
          <Link className="text-white font-bold px-3 hover:bg-sky-700 block pt-5" href="/contact">
            CONTACT US
          </Link>
        </nav>
      </div>
      <div className="bg-sky-700 h-1"></div>
    </div>
  );
}
