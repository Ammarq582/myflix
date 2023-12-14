import { useContext } from 'react';
import './home.styles.scss';
import { DataContext } from '../../contexts/data.context';
import MovieCard from '../movie-card/movie-card.component';
import CategoryContainer from '../category-container/category-container.component';


const Home = () => {
    const {homeData} = useContext(DataContext);
    return(
        <div className="home">
            {
                homeData.map(data => <CategoryContainer title={data.title} products={data.products}/>)
            }
            
        </div>
    )
}

export default Home;