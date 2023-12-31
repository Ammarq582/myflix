import { useContext, useState } from 'react';
import './search-results.styles.scss';
import CategoryContainer from '../category-container/category-container.component';
import Spinner from '../spinner/spinner.component';
import { SearchContext } from '../../contexts/search.context';




const SearchPage = () => {
    const {isLoading, updateSearch, searchData} = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
        updateSearch(e.target.value);
    }
    return(
        <div className="search-page">
            <input type="text" className='search-input' name="search" id="search" value={searchValue} placeholder='search a movie or show' onChange={updateSearchValue}/>
            {
                isLoading
                ?
                <Spinner/>
                :
                searchData.map(data => <CategoryContainer title={data.title} products={data.products}/>)}
        </div>
    )
}

export default SearchPage;