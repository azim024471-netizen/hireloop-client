
import { protectedFetch, serverFetch } from "../coreFunction/server";
import { getsession } from "../coreFunction/session";

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getsession();
    return getRecruiterCompany(user?.id);
}


export const getCompanies =async ()=>{
    return protectedFetch(`/api/companies`)
}
