import Link from 'next/link';
import { ShieldX } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <ShieldX className="h-10 w-10 text-red-500" />
        </div>

        <h1 className="mb-3 text-4xl font-bold text-white">
          Access Denied
        </h1>

        <p className="mb-8 text-zinc-400">
          You don't have permission to access this page.
          Please contact the administrator or switch to an account
          with the required role.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Go Home
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;