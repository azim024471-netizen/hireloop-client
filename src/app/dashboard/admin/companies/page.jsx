import CompanyTable from '@/components/dashboard/CompanyTable';
import { getCompanies } from '@/lib/api/companies';
import React from 'react';

const CompanyPage = async () => {
      
    const companies = await getCompanies();

    // console.log(companies, 'companiesssssssssssssssssssss ')

    return (
       <div className="min-h-screen bg-[#0d0d0f] p-8 text-neutral-100">
            <div className="max-w-7xl mx-auto space-y-6">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-neutral-200">
                        Companies for review
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                        Total items submitted: {companies.length}
                    </p>
                </div>
                
                <CompanyTable companies={companies} />
            </div>
        </div>
    );
};

export default CompanyPage;