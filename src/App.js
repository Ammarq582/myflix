import { Route, Routes } from "react-router-dom";
import MoviePage from "./components/movie-page/movie-page.component";
import SearchBox from "./components/search-box/search-box.component";
import Home from "./components/home/home.component";
import TvPage from "./components/tv-page/tv-page.component";
import SearchPage from "./components/search-results/search-results.component";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<SearchBox/>}>
        <Route index element={<Home/>}/>
        <Route path="movie/*" element={<MoviePage/>}/>
        <Route path="tv/*" element={<TvPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
      </Route>
    </Routes>  
    
  )
}

export default App;
