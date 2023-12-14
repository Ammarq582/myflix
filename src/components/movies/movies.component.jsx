import { useContext } from 'react';
import './movies.styles.scss';
import { DataContext } from '../../contexts/data.context';
import MovieCard from '../movie-card/movie-card.component';

const Movies = () => {
    const {movies} = useContext(DataContext);
    return(
        <div className="movies-container">
            {
                movies.map(movie => <MovieCard movie={movie}/>)
            }
        </div>
    )
}

export default Movies;