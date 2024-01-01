import { createContext, useEffect, useState } from "react";
import { options } from "../utils/tmdb.utils";

export const movieContext = createContext({
    movie: [],
    pageNum: 1,
    updatePageNum: () => null,
})

let initial = 1;

export const MovieProvider = ({children}) => {
    const [movie, setMovie] = useState([]);
    const [pageNum, setPageNum] = useState(initial);


    const updatePageNum = () => { 
        setPageNum(++initial);
    }

    useEffect(() => {
        console.log(pageNum);
        const getMovieData = async () => {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`, options)
            const movieData = await movieResponse.json()
            setMovie([...movie, ...movieData.results])            
        }
        getMovieData();
        // eslint-disable-next-line
    }, [pageNum])

    const value = {movie, pageNum, updatePageNum}

    return <movieContext.Provider value={value}>{children}</movieContext.Provider>
}