import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090B] px-4">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">
          <ShieldAlert className="h-12 w-12 text-red-500" />
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Error 403
        </p>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-white md:text-6xl">
          Access Forbidden
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-zinc-400">
          You don't have permission to access this page.
          Please contact your administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Go Home
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}