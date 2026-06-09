import { serverFetch } from "../coreFunction/server";



export const getApplicationsByApplicant = async(applicantId)=>{
   return serverFetch(`/api/applications?applicantId=${applicantId}`)
}