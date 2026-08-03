import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          복지 Finder
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">검색</Link>
          <Link href="/favorites">즐겨찾기</Link>
        </nav>
      </div>
    </header>
  );
}
