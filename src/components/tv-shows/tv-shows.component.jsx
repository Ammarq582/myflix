import { useCallback, useContext, useMemo } from 'react';
import './tv-shows.styles.scss';
import MovieCard from '../movie-card/movie-card.component';
import { tvContext } from '../../contexts/tv.context';
import { debounce } from '../../utils/tmdb.utils';



const TvShows = () => {
    const {tv, updatePageNum} = useContext(tvContext);
    
    const handlerScroll = useCallback((e) => {
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
        <div className="tv-container" onScroll={(e) => debouncedScroll(e)}>
            {
                tv.map(tv => <MovieCard movie={tv}/>)
            }
        </div>
    )
}

export default TvShows;