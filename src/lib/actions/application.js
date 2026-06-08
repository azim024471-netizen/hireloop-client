'use server'

import { serverMutation } from "../coreFunction/server"

export const submitApplication = async (applicationData)=>{
    return serverMutation('/api/applications' , applicationData);
    
}