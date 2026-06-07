import JobsCard from '@/components/jobsComponents/JobsCard';
import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const AllJObsPage = async () => {
  const jobs = await getJobs();
  console.log(jobs, 'form jobs pageeeeeeeeeeeeeeeee')
    return (
        <div className='container mx-auto'>
            <p>
            jobs ar coming
            </p>
            <div className='grid grid-cols-3 gap-3.5'>
                {
                    jobs.map(job=> <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJObsPage;