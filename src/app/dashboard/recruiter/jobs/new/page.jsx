import React from 'react';
// import PostJobForm from './PostJobForm';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import PostJobForm from './PostJobForm';
// import PostJobForm from './PostJobForm';

const PostJobPage =async () => {

    const compnay = await getLoggedInRecruiterCompany();

    console.log(compnay, 'post job pageeeeeeeee')
    return (
        <div>
            hi
           <PostJobForm company={compnay}></PostJobForm>
            {/* <PostJobForm compnay={compnay}></PostJobForm> */}
            {/* <PostJobForm compnay={compnay} ></PostJobForm> */}
        </div>
    );
};

export default PostJobPage;