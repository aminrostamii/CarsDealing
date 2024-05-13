import Link from "next/link";

const Header = () => {
    return (
        <nav className="relative flex items-center justify-between sm:h-20 md:justify-center py-6 px-4  bg-black">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" aria-label="Home">
                <img src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg" className=" w-[80px] h-[60px] ml-10" alt="" />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10 mr-4">
        <Link
            href="/"
            className="font-medium text-white border-b-2 border-transparent hover:border-white transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/Cars"
            className="font-medium text-white border-b-2 border-transparent hover:border-white transition duration-150 ease-in-out"
          >
            Cars
          </Link>
          <a
            href="#pricing"
            className="font-medium text-white border-b-2 border-transparent hover:border-white transition duration-150 ease-in-out"
          >
            Pricing
          </a>
          <Link href="/blog"  className="font-medium text-white border-b-2 border-transparent hover:border-white transition duration-150 ease-in-out">

              Blog
          </Link>
          <a
            href="https://docs.pingping.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white border-b-2 border-transparent hover:border-white transition duration-150 ease-in-out"
          >
            Docs
          </a>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
            <Link href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out">
                Login
            </Link>
          </span>
          <span className="inline-flex rounded-md shadow mr-4">
            <Link href="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
                Get started
            </Link>
          </span>
        </div>
      </nav>
    );
}

export default Header;
