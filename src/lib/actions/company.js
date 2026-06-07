'use server'

import { serverMutation } from "../coreFunction/server"

// const baseUrl= process.env.NEXT_PUBLIC_BASE_URL;
 
// export const createCompany = async (newCompnayData)=>{
//     const res = await fetch(`${baseUrl}/api/companies`,{
//         method:"POST",
//         headers :{
//                         'Content-Type': 'application/json',
//         },
//          body: JSON.stringify(newJobData),
//     });

//     return res.json()
// }

export const createCompany = async(newCompanyData)=>{
     
    return serverMutation('/api/companies' , newCompanyData);
}