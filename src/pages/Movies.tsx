import { FormEvent, useEffect, useState } from "react"
import { IMovie } from "../models/IMovie"
import { getMovies } from "../services/movieService";
import { ShowMovies } from "../components/ShowMovies";

export const Movies =()=>{
const [movies, setMovies] = useState<IMovie[]>([]);
const [input, setInput] = useState('')
useEffect(()=>{
   
    
})
const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault();
    if(!input.trim()) return;
    if(movies.length>0) return;

  
        const data = await getMovies(input);
        setMovies(data)
    
}

return(
    <>
        <form onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            type="text"
             />
             <button type="submit">Search</button>
        </form>
        <ShowMovies movies={movies}></ShowMovies>
    </>
)

};