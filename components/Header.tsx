import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">Ryan King</Link>
        <ul className="flex space-x-4">
          <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
          <li><a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
