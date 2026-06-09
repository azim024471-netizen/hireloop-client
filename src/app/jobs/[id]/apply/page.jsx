import { getJobById } from '@/lib/api/jobs';
import { getsession } from '@/lib/coreFunction/session';
import { ShieldExclamation, ArrowRight, Paperclip, Briefcase,  } from '@gravity-ui/icons';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';
import { getApplicationsByApplicant } from '@/lib/api/application';

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const user = await getsession();
  if (!user) {
    redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== 'seeker') {
    return (
      <div className="w-full min-h-[80vh] flex flex-col justify-center items-center p-6">
        <div className="max-w-sm w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldExclamation className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Access Restricted</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Only job seekers can apply for positions. Sign in with a seeker account to continue.
          </p>
          <Link
            href="/auth/signin"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium transition"
          >
            Switch account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const job = await getJobById(id);
  const applications = await getApplicationsByApplicant(user.id);

  const plan = {
    name: 'free',
    maxApplicationPerMonth: 3,
  };

  const used = applications.length;
  const max = plan.maxApplicationPerMonth;
  const remaining = max - used;
  const barPercent = Math.min((used / max) * 100, 100);
  const isFull = used >= max;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">

      {/* Quota banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Briefcase className="w-4 h-4" />
            <span>Applications this month</span>
          </div>
          <span className="text-sm font-medium text-zinc-200">{used} / {max} used</span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${isFull ? 'bg-red-500' : 'bg-blue-500'}`}
            style={{ width: `${barPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-zinc-500">
            {isFull
              ? 'Monthly limit reached — upgrade to apply more'
              : `${remaining} application${remaining !== 1 ? 's' : ''} remaining on free plan`}
          </p>
          <Link
            href="/plans"
            className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition whitespace-nowrap"
          >
            View plans
          </Link>
        </div>
      </div>

      {/* Apply form */}
      {!isFull ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase mb-5">
            Apply for position
          </p>
          <JobApply job={job} applicant={user} />
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Paperclip className="w-5 h-5 text-red-400" />
          </div>
          <h3 className="text-base font-semibold text-zinc-100 mb-2">Application limit reached</h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            You've used all {max} applications for this month. Upgrade your plan to keep applying.
          </p>
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition"
          >
            Upgrade now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ApplyPage;