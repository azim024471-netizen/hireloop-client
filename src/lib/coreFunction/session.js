import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";




export const getsession = async()=>{
    const session = await auth.api.getSession({
        headers : await headers()
    })
    
    return session?.user || null; 
}


export const getUserToken = async()=>{
    const session = await auth.api.getSession({
        headers:await headers()
    })
    
    return session?.session?.token;
}




export const requireRole =async(role)=>{
    const user = await getsession();
    if(!user){
        redirect('/auth/signin')
    }
    if(user.role !== role){
        redirect('/unauthorized')
    }
    return user;

}