import { protectedFetch } from "../coreFunction/server";



export const getApplicationsByApplicant = async(applicantId)=>{
   return protectedFetch(`/api/applications?applicantId=${applicantId}`)
}