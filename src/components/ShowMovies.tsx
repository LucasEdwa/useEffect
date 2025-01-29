import { IMovie } from "../models/IMovie";
import { ShowMovie } from "./ShowMovie";

interface IShowMoviesProps{
    movies:IMovie[];
}

export const ShowMovies = (props: IShowMoviesProps)=>{
    return(
        <div>
            {props.movies.map((m)=>{
                return<ShowMovie movie={m} key={m.imdbID}/>
            })}
        </div>
    )
}