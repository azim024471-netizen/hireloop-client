'use server'

import { serverMutation } from "../coreFunction/server"

export const createSubcribtion = async (subsinfo)=>{
    return serverMutation('/api/subcribtion' , subsinfo);
    
}