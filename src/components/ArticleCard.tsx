import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ArticleCard({
  title,
  description,
  href,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group border border-slate-800 rounded-lg p-6 hover:border-slate-600 transition"
    >
      <h2 className="text-xl font-semibold group-hover:text-indigo-400 transition">
        {title}
      </h2>
      <p className="mt-3 text-slate-400 text-sm">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm text-indigo-500">
        Read article →
      </span>
    </Link>
  );
}
