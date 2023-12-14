import { useContext } from 'react';
import './tv-shows.styles.scss';
import { DataContext } from '../../contexts/data.context';
import MovieCard from '../movie-card/movie-card.component';

const TvShows = () => {
    const {tv} = useContext(DataContext);
    return(
        <div className="tv-container">
            {
                tv.map(tv => <MovieCard movie={tv}/>)
            }
        </div>
    )
}

export default TvShows;