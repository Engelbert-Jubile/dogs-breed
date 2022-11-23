import Link from "next/link";
import Image from "next/image";
import apple_icon from "../public/assets/apple-icon.png";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={apple_icon} alt="icon" width="40" height="40" />
          <span className="ml-3 text-xl">Dogs Breed</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Menu
          </Link>
          <Link href="/reference" className="mr-5 hover:text-gray-900">
            Reference
          </Link>
          <Link href="/faq" className="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
