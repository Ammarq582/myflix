import { Route, Routes } from "react-router-dom"
import TvShows from "../tv-shows/tv-shows.component"
import MovieDetails from '../movie-details/movie-details.component';

const TvPage = () => {
    return(
        <Routes>
            <Route index element={<TvShows/>}/>
            <Route path=':id' element={<MovieDetails category='tv'/>}/>
        </Routes>
    )
}

export default TvPage;