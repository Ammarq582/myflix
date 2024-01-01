import { createContext, useEffect, useState } from "react";
import { options } from "../utils/tmdb.utils";

export const tvContext = createContext({
    tv: [],
    pageNum: 1,
    updatePageNum: () => null,
})

let initial = 1;

export const TvProvider = ({children}) => {
    const [tv, setTv] = useState([]);
    const [pageNum, setPageNum] = useState(initial);


    const updatePageNum = () => { 
        setPageNum(++initial);
    }

    useEffect(() => {
        const getTvData = async () => {
            console.log(pageNum);
            const tvResponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`, options)
            const tvData = await tvResponse.json()
            console.log(tvData);
            setTv([...tv, ...tvData.results]);
        }
        getTvData();
        // eslint-disable-next-line
    }, [pageNum])

    const value = {tv, pageNum, updatePageNum}

    return <tvContext.Provider value={value}>{children}</tvContext.Provider>
}