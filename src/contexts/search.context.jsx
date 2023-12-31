import { createContext, useEffect, useMemo, useState } from "react";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDJjYWU1OThjMTc2MjM4ZmNjNDlhNzVhMjA5ZGFmMiIsInN1YiI6IjY1NmI5OWIyODgwNTUxMDBhZWU4ZDI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y8fmNtwY5nU42q4XWqye-kUjl11Rgg2RB4DD5wXo5vc'
    }
  };

const debounce = (mainFunction, delay) => {
    let timer;

    return function(...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay)
    }
  }

// const debouncedSearch = debounce(getMovies, 2000);






  

export const SearchContext = createContext({
    searchData: [],
    updateSearch: () => null,
    isLoading: false,

})

export const SearchProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState('')

    const updateSearch = (searchValue) => {
        setSearch(searchValue)
    }

    const getMovies = async (newsearch) => {
      console.log(newsearch);
    const movieSearchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${newsearch}&page=1&include_adult=false`, options)
    const movieSearchdata = await movieSearchResponse.json()

    const tvSearchResponse = await fetch(`https://api.themoviedb.org/3/search/tv?query=${newsearch}&page=1&include_adult=false`, options)
    const tvSearchdata = await tvSearchResponse.json()
    
    if(newsearch.length) {
      setSearchData([
        {title: 'TV Shows', products: tvSearchdata.results},
        {title: 'Movies', products: movieSearchdata.results}
      ]);
      setIsLoading(false);
    } 
  }

  const debouncedSearch = useMemo(() => {
    return debounce(getMovies, 1000)
  }, [])
    

    useEffect(() => {
      if(search.length) {
        setIsLoading(true)
      } else {
        setIsLoading(false);
      }
      setSearchData([]);
      debouncedSearch(search);
      }, [search])

      const value = {isLoading, searchData, updateSearch}

    return(
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    )
}