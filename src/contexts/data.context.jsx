import { createContext, useEffect, useState } from "react";
import { options } from "../utils/tmdb.utils";



  

export const DataContext = createContext({
  category: 'movie',
  homeData: [],
  movies: [],
  tv: [],
  searchData: [],
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
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [latestMovies, setLatestMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    
    
    

    
    const updateCategory = (category) => {
        setCategory(category);
    }

    useEffect(() => {
      setHomeData([
        {title: 'Trending Movies', products: trendingMovies},
        {title: 'Trending TV Shows', products: trendingTv},
        {title: 'Top Rated TV Shows', products: topRatedTv},
        {title: 'Latest Movies', products: latestMovies},
        {title: 'Top Rated Movies', products: topRatedMovies},
        
      ])
    }, [latestMovies, trendingMovies, trendingTv, topRatedTv, topRatedMovies])

    useEffect(() => {
        const getData = async () => {
          console.log('aaa');
            const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            const movieData = await movieResponse.json()
            setMovies([...movies, ...movieData.results]);
          
            const tvResponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            const tvData = await tvResponse.json()
            setTv([...tv, ...tvData.results]);
          
            const latestMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
            const latestMoviesData = await latestMoviesResponse.json()
            setLatestMovies([...latestMovies, ...latestMoviesData.results]);
          
            const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
            const topRatedMoviesData = await topRatedMoviesResponse.json()
            setTopRatedMovies([...topRatedMovies, ...topRatedMoviesData.results]);
            
            const topRatedTvResponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, options)
            const topRatedTvData = await topRatedTvResponse.json()
            setTopRatedTv([...topRatedTv, ...topRatedTvData.results]);
            
            
          const trendingMoviesResponse = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
          const trendingMoviesData = await trendingMoviesResponse.json()
          setTrendingMovies(trendingMoviesData.results);
          
          const trendingTvResponse = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, options)
          const trendingTvData = await trendingTvResponse.json()
          setTrendingTv(trendingTvData.results);
          
          setIsLoading(false);
          
      }
      getData();
      // eslint-disable-next-line
      }, [])
    

      const value = {isLoading, category, movies, tv, homeData, updateCategory};

    
    return(
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}
