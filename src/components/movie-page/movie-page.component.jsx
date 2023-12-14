import { Route, Routes  } from 'react-router-dom';
import './movie-page.styles.scss'
import MovieDetails from '../../movie-details/movie-details.component';
import Movies from '../movies/movies.component';

const MoviePage = () => {
    return(
        <Routes>
            <Route index element={<Movies/>}/>
            <Route path=':id' element={<MovieDetails category='movie'/>}/>
        </Routes>
    )
}

export default MoviePage;