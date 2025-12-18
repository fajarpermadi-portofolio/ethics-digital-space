import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Ethics in Digital Space
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm text-slate-300">
          <Link href="/articles" className="hover:text-white transition">
            Articles
          </Link>
          <Link href="/references" className="hover:text-white transition">
            References
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
