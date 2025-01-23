import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Saúde Alimentar
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:underline">
              Sobre Mim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

