import { getsession } from '@/lib/coreFunction/session';
import { redirect } from 'next/navigation';
import React from 'react';

const ApplyPge = async() => {

    const user = await getsession();

    if(!user){
        redirect 
    }

    return (
        <div>
            reeeeeeeeeeeeee
        </div>
    );
};

export default ApplyPge;