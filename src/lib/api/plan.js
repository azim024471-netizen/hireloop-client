import { serverFetch } from "../coreFunction/server"


export const getPlan = async(plan_id)=>{
    return serverFetch(`/api/plans?plan_id=${plan_id}`)
}