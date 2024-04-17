import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 ">
      <div className="grid grid-cols-1 gap-8 py-12 transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 ">
        <div className="col-span-1 lg:col-span-2">
          <Link
            className="flex items-center flex-initial font-bold md:mr-24"
            href="/"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              {/* <Logo /> */}
            </span>
            <span>VNS.BLUE</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                Careers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold transition duration-150 ease-in-out ">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link className="transition duration-150 ease-in-out " href="/">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 lg:col-span-6 lg:justify-end"></div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row ">
        <div>
          <span>&copy; {new Date().getFullYear()} VNS.BLUE</span>
        </div>
      </div>
    </footer>
  );
}
