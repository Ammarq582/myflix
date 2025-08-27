import { useContext } from 'react';
import './home.styles.scss';
import { DataContext } from '../../contexts/data.context';
import CategoryContainer from '../category-container/category-container.component';
import Spinner from '../spinner/spinner.component';


const Home = () => {
    const {homeData, isLoading} = useContext(DataContext);

    return(
        <div className="home">
            {
                isLoading
                ?
                <Spinner/>
                :
                homeData.map(data => <CategoryContainer key={data.title} title={data.title} products={data.products}/>)
            }
            
        </div>
    )
}

export default Home;