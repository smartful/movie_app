import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-3 bg-red-500">
      <h1>
        <Link href="/">Movie App</Link>
      </h1>
    </nav>
  );
}
