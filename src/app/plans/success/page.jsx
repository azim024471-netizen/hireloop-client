import { stripe } from '@/lib/stripe';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CircleCheckBig } from 'lucide-react';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error('Please provide a valid session_id');
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  });

  if (status === 'open') {
    redirect('/');
  }

  if (status === 'complete') {
    return (
      <div className="min-h-screen bg-[#09090B] px-4 flex items-center justify-center">
        <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center shadow-2xl">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
            <CircleCheckBig className="h-14 w-14 text-green-500" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white">
            Payment Successful 🎉
          </h1>

          <p className="mt-4 text-zinc-400">
            Thank you for your purchase. Your payment has been
            processed successfully.
          </p>

          {/* Email */}
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-400">
              Confirmation sent to
            </p>

            <p className="mt-2 text-lg font-medium text-white break-all">
              {customerEmail}
            </p>
          </div>

          {/* Success Message */}
          <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
            <p className="text-green-400">
              Your recruiter plan is now active and ready to use.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard/recruiter"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Go To Dashboard
            </Link>

            <Link
              href="/jobs/add"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900"
            >
              Post Another Job
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}