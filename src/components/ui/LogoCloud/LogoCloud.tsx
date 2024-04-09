export default function LogoCloud() {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
        Brought to you by
      </p>
      <div className="grid grid-cols-1 my-12 space-y-4 place-items-center sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-start h-12">
          <a aria-label="Next.js Link" href="https://nextjs.org">
            <img
              alt="Next.js Logo"
              className="h-6 text-white sm:h-12"
              src="/nextjs.svg"
            />
          </a>
        </div>
        <div className="flex items-center justify-start h-12">
          <a aria-label="Vercel.com Link" href="https://vercel.com">
            <img
              alt="Vercel.com Logo"
              className="h-6 text-white"
              src="/vercel.svg"
            />
          </a>
        </div>
        <div className="flex items-center justify-start h-12">
          <a aria-label="stripe.com Link" href="https://stripe.com">
            <img
              alt="stripe.com Logo"
              className="h-12 text-white"
              src="/stripe.svg"
            />
          </a>
        </div>
        <div className="flex items-center justify-start h-12">
          <a aria-label="supabase.io Link" href="https://supabase.io">
            <img
              alt="supabase.io Logo"
              className="h-10 text-white"
              src="/supabase.svg"
            />
          </a>
        </div>
        <div className="flex items-center justify-start h-12">
          <a aria-label="github.com Link" href="https://github.com">
            <img
              alt="github.com Logo"
              className="h-8 text-white"
              src="/github.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
