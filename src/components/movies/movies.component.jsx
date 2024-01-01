import { useCallback, useContext, useMemo } from 'react';
import './movies.styles.scss';
import MovieCard from '../movie-card/movie-card.component';
import { movieContext } from '../../contexts/movie.context';
import { debounce } from '../../utils/tmdb.utils';

const Movies = () => {
    const {movie, updatePageNum} = useContext(movieContext);

    const handlerScroll = useCallback((e) => {
        console.log('scroll');
        const isBottomReached = (e.target.scrollTop + e.target.clientHeight + 100) > e.target.scrollHeight;
        if(isBottomReached) {
            console.log('bottom');
            updatePageNum();
        }
    }, [updatePageNum])

    const debouncedScroll = useMemo(() => {
        return debounce(handlerScroll, 500)
    }, [handlerScroll])

    return(
        <div className="movies-container" onScroll={(e) => debouncedScroll(e)}>
            {
                movie.map(movie => <MovieCard movie={movie}/>)
            }
        </div>
    )
}

export default Movies;