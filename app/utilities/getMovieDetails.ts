export async function getMovieDetails(movieId:number) {
    const url=`/api/getMovieDetails/${movieId}`
    try{
        const response=await fetch(url)
        if(!response.ok){
            return `movie with id ${movieId} not found`
        }
        const result=await response.json()
        return result;
    }
    catch(error){
        return error
    }

    
}