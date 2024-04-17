'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import ModeToggle from '@/app/[lng]/ModeTogglePage/page';
import { handleRequest } from '@/utils/auth-helpers/client';
import { SignOut } from '@/utils/auth-helpers/server';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';

import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  // eslint-disable-next-line
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link aria-label="Logo" className={s.logo} href="/">
          VNS.BLUE
          {/* <Logo /> */}
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link className={s.link} href="/">
            Pricing
          </Link>
          {user && (
            <Link className={s.link} href="/account">
              Account
            </Link>
          )}
          <ModeToggle />
          <Link className={s.link} href="/">
            言語
          </Link>
          <Link className={s.link} href="/">
            広告
          </Link>
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={e => handleRequest(e, SignOut, router)}>
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            <input name="pathName" type="hidden" value={usePathname()} />
            <button className={s.link} type="submit">
              Sign out
            </button>
          </form>
        ) : (
          <Link className={s.link} href="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
