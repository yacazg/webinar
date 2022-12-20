import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 sm:flex justify-between items-center text-gray-600 rounded-md max-w-screen-xl mx-auto">
      <span className="justify-self-start">
        <Link
          href="/"
          className="hover:text-black rounded-md inline-flex items-center py-4 px-5"
        >
          Hello
        </Link>
      </span>

      <input
        type="checkbox"
        className="hover:text-black rounded-md inline-flex items-center sm:hidden peer appearance-none w-12 h-full justify-center justify-self-end text-3xl cursor-pointer after:content-['≡'] checked:after:content-['×']"
        aria-controls="navigation-menu"
        aria-label="Toggle navigation menu"
      />

      <ul
        className="hidden peer-checked:flex flex-col sm:flex sm:flex-row sm:items-center col-start-1 col-end-3"
        id="navigation-menu"
      >
        <li>
          <Link
            href="/lorem"
            className="hover:text-black rounded-md inline-flex py-4 px-5"
          >
            Lorem
          </Link>
        </li>
        <li>
          <Link
            href="/blog/post-1"
            className="hover:text-black rounded-md inline-flex py-4 px-5"
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            href="/blog/post-2"
            className="hover:text-black rounded-md inline-flex py-4 px-5"
          >
            Post 2
          </Link>
        </li>
        <li>
          <Link
            href="/blog/post-3"
            className="hover:text-black rounded-md inline-flex py-4 px-5"
          >
            Post 3
          </Link>
        </li>
      </ul>
    </nav>
  )
}
