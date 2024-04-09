'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import { handleRequest } from '@/utils/auth-helpers/client';
import { signInWithPassword } from '@/utils/auth-helpers/server';

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function PasswordSignIn({
  allowEmail,
  redirectMethod
}: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  return (
    <div className="my-8">
      <form className="mb-4" noValidate onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email">Email</label>
            <input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="w-full p-3 rounded-md bg-zinc-800"
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-zinc-800"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <Button
            className="mt-1"
            loading={isSubmitting}
            type="submit"
            variant="slim"
          >
            Sign in
          </Button>
        </div>
      </form>
      <p>
        <Link className="font-light text-sm" href="/signin/forgot_password">
          Forgot your password?
        </Link>
      </p>
      {allowEmail && (
        <p>
          <Link className="font-light text-sm" href="/signin/email_signin">
            Sign in via magic link
          </Link>
        </p>
      )}
      <p>
        <Link className="font-light text-sm" href="/signin/signup">
          Don't have an account? Sign up
        </Link>
      </p>
    </div>
  );
}
