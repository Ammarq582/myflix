import { createContext, useEffect, useState } from "react";
import { options } from "../utils/tmdb.utils";



  

export const DataContext = createContext({
  category: 'movie',
  homeData: [],
  isLoading: true,
  pageNum: 1,
  updateSearch: () => null, 
  updateCategory: () => null,
  setPageNum: () => null, 
})

export const DataProvider = ({children}) => {
    const [category, setCategory] = useState('movie')
    const [isLoading, setIsLoading] = useState(true)
    const [homeData, setHomeData] = useState([])
    // const [movies, setMovies] = useState([])
    // // const [tv, setTv] = useState([])
    // const [latestMovies, setLatestMovies] = useState([])
    // const [trendingMovies, setTrendingMovies] = useState([])
    // const [trendingTv, setTrendingTv] = useState([])
    // const [topRatedMovies, setTopRatedMovies] = useState([])
    // const [topRatedTv, setTopRatedTv] = useState([])
    
    const updateCategory = (category) => {
        setCategory(category);
    }

    useEffect(() => {
        const getData = async () => {
          
            // const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            // const movieData = await movieResponse.json()
            
            // const tvResponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            // const tvData = await tvResponse.json()
            
            const latestMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
            const latestMoviesData = await latestMoviesResponse.json()
            
            const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
            const topRatedMoviesData = await topRatedMoviesResponse.json()
            
            const topRatedTvResponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, options)
            const topRatedTvData = await topRatedTvResponse.json()
            
            const trendingMoviesResponse = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
            const trendingMoviesData = await trendingMoviesResponse.json()
            
            const trendingTvResponse = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, options)
            const trendingTvData = await trendingTvResponse.json()
            
            setHomeData([
              {title: 'Trending Movies', products: trendingMoviesData.results},
              {title: 'Trending TV Shows', products: trendingTvData.results},
              {title: 'Top Rated TV Shows', products: topRatedTvData.results},
              {title: 'Latest Movies', products: latestMoviesData.results},
              {title: 'Top Rated Movies', products: topRatedMoviesData.results},
              
            ])
            
            setIsLoading(false);
          
      }
      getData();
      
      }, [])
    

      const value = {isLoading, category, homeData, updateCategory};

    
    return(
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}
