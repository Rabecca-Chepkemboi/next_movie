import { BASE_URL,ACCESS_TOKEN } from "@/app/config";
import { error } from "console";
import { apiFetch } from "../utils/apiFetch";

export async function GET(){
    try{
        const response=await fetch(`${BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${ACCESS_TOKEN}`
            }
        })
        const result=await response.json()
        return new Response(JSON.stringify(
            
        result),{
            status:200,
            statusText:'Success'

        })

    }catch(error:any){
        return new Response(error.message,{
            status:500,
            statusText:'error'
        })
    }
}