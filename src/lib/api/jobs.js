const baseUrl= process.env.NEXT_PUBLIC_BASE_URL;


export const getCompanyJobs = async(companyID, status ='active')=>{
    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyID}&status=${status}`);
    return res.json()

}