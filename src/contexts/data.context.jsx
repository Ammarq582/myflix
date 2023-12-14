import { createContext, useEffect, useState } from "react";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDJjYWU1OThjMTc2MjM4ZmNjNDlhNzVhMjA5ZGFmMiIsInN1YiI6IjY1NmI5OWIyODgwNTUxMDBhZWU4ZDI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y8fmNtwY5nU42q4XWqye-kUjl11Rgg2RB4DD5wXo5vc'
    }
  };


  

export const DataContext = createContext({
  category: 'movie',
  homeData: [],
  movies: [],
  tv: [],
  searchData: [],
  updateSearch: () => null, 
  updateCategory: () => null, 
})

export const DataProvider = ({children}) => {
    const [category, setCategory] = useState('movie')
    const [homeData, setHomeData] = useState([])
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [latestMovies, setLatestMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState('')
    console.log(search);
    console.log(movies);
    

    const updateSearch = (searchValue) => {
        setSearch(searchValue)
    }

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
          // const moviesArray = [];
          // const tvArray = [];
          // const latestMoviesArray = [];
          // const trendingMoviesArray = [];
          // const trendingTvArray = [];
          // const topRatedMoviesArray = [];
          // const topRatedTvArray = [];

          // for (let page = 1; page < 3; page++) {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            const movieData = await movieResponse.json()
            setMovies(movieData.results);
            // moviesArray.push(...movieData.results)
          
            const tvResponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
            const tvData = await tvResponse.json()
            setTv(tvData.results);
            // tvArray.push(...tvData.results)
            
            const latestMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
            const latestMoviesData = await latestMoviesResponse.json()
            setLatestMovies(latestMoviesData.results);
            // latestMoviesArray.push(...latestMoviesData.results)

            const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
            const topRatedMoviesData = await topRatedMoviesResponse.json()
            setTopRatedMovies(topRatedMoviesData.results);
            // topRatedMoviesArray.push(...topRatedMoviesData.results)

            const topRatedTvResponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, options)
            const topRatedTvData = await topRatedTvResponse.json()
            setTopRatedTv(topRatedTvData.results);
            // topRatedTvArray.push(...topRatedTvData.results)

            
          // }

          const trendingMoviesResponse = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
          const trendingMoviesData = await trendingMoviesResponse.json()
          setTrendingMovies(trendingMoviesData.results);
          // trendingMoviesArray.push(...trendingMoviesData.results)

          const trendingTvResponse = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, options)
          const trendingTvData = await trendingTvResponse.json()
          setTrendingTv(trendingTvData.results);
          // trendingTvArray.push(...trendingTvData.results)

          // setMovies(moviesArray);
          // setTv(tvArray);
          // setLatestMovies(latestMoviesArray);
          // setTrendingMovies(trendingMoviesArray);
          // setTrendingTv(trendingTvArray);
          // setTopRatedMovies(topRatedMoviesArray);
          // setTopRatedTv(topRatedTvArray);
        
      }
      getData();
      }, [])

    useEffect(() => {
        const getMovies = async () => {
        const movieSearchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&page=1&include_adult=true`, options)
        const movieSearchdata = await movieSearchResponse.json()

        const tvSearchResponse = await fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&page=1&include_adult=true`, options)
        const tvSearchdata = await tvSearchResponse.json()
        
        setSearchData([
          {title: 'TV Shows', products: tvSearchdata.results},
          {title: 'Movies', products: movieSearchdata.results}
        ]);
      }
      getMovies();
      }, [search])



      const value = {category, movies, searchData, tv, homeData, updateSearch, updateCategory};

    
    return(
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}
