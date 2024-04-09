'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import { handleRequest } from '@/utils/auth-helpers/client';
import { updatePassword } from '@/utils/auth-helpers/server';

interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <div className="my-8">
      <form className="mb-4" noValidate onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="password">New Password</label>
            <input
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-zinc-800"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <label htmlFor="passwordConfirm">Confirm New Password</label>
            <input
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-zinc-800"
              id="passwordConfirm"
              name="passwordConfirm"
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
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}
