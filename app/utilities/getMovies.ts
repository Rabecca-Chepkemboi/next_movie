import { Result } from "postcss"

export const getMovies=async ()=>{
    const url='/api/get-movies'
    const response=await fetch (url)
    if (!response.ok) {
        return 'Error fetching movies'
    }
    const result=await response.json()
    return result.results
}