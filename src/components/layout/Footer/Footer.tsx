import Link from 'next/link';

import GitHub from '@/components/icons/GitHub';
import Logo from '@/components/icons/Logo';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            className="flex items-center flex-initial font-bold md:mr-24"
            href="/"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span>ACME</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                Careers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                href="/"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-zinc-900">
        <div>
          <span>
            &copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
