import { getJobById } from '@/lib/api/jobs';
import { getsession } from '@/lib/coreFunction/session';
import { ShieldExclamation } from '@gravity-ui/icons';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';

const ApplyPge = async({params}) => {
    const {id} = await params;

    const user = await getsession();
    console.log(user, 'user from apply page')
    if(!user){
        // redirect(`/auth/signin?redirect=${id}/apply`) 
         redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }



     if (user.role !== 'seeker') {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only job seekers can apply for positions. Please sign in with a seeker account to proceed.
                    </p>
                    <Link 
                        href="/auth/signin" 
                        className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition"
                    >
                        Switch Account
                    </Link>
                </div>
            </div>
        );
    }

  const job =await getJobById(id)







    return (
        <div>
    <h1>Apply for the job {job.tittle} </h1>
    <JobApply job={job} applicant={user}></JobApply>

        </div>
    );
};

export default ApplyPge;