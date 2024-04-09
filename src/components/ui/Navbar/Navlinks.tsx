'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import s from './Navbar.module.css';

import Logo from '@/components/icons/Logo';
import { handleRequest } from '@/utils/auth-helpers/client';
import { SignOut } from '@/utils/auth-helpers/server';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link aria-label="Logo" className={s.logo} href="/">
          <Logo />
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
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
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
