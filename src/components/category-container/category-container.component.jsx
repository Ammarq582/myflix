import MovieCard from '../movie-card/movie-card.component';
import './category-container.styles.scss';

const CategoryContainer = ({title, products}) => {
    return(
        <div className="category-container">
            <h2>{title}</h2>
            <div className="products-container">
                {products.map(product => <MovieCard movie={product}/>)}
            </div>
        </div>
    )
}

export default CategoryContainer;