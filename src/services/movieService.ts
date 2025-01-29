import { get } from "./serviceBase";
import {IOmdbResponse} from '../models/IOmdbResponse'
import { IMovieExt } from "../models/IMovieExt";
const BASE_URL = 'http://www.omdbapi.com/?apikey=1efdfa84&';

export const getMovies = async(input:string)=>{
    const data = await get<IOmdbResponse>(`${BASE_URL}s=${input}`);
    return data.Search;
}

export const getMovieById = async (id:string)=>{
    const data= await get<IMovieExt>(`${BASE_URL}i=${id}`);
    return data;
}