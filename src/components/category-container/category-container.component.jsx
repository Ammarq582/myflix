import { useCallback, useMemo } from 'react';
import MovieCard from '../movie-card/movie-card.component';
import './category-container.styles.scss';
import { debounce } from '../../utils/tmdb.utils';

const CategoryContainer = ({title, products, updatePageNum}) => {

    const handlerScroll = useCallback((e) => {
        console.log('scroll');
        const isEndReached = (e.target.scrollLeft + e.target.clientWidth + 100) > e.target.scrollWidth;
        if(isEndReached && updatePageNum) {
            console.log('End');
            updatePageNum();
        }
    }, [updatePageNum])

    const debouncedScroll = useMemo(() => {
        return debounce(handlerScroll, 500)
    }, [handlerScroll])

    return(
        <div className="category-container">
            <h2>{title}</h2>
            <div className="products-container" onScroll={(e) => debouncedScroll(e)}>
                {products.map(product => <MovieCard movie={product}/>)}
            </div>
        </div>
    )
}

export default CategoryContainer;