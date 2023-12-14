import { useContext, useState } from 'react';
import './search-results.styles.scss';
import { DataContext } from '../../contexts/data.context';
import CategoryContainer from '../category-container/category-container.component';

const SearchPage = () => {
    const {updateSearch, searchData} = useContext(DataContext);
    const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
        updateSearch(e.target.value)
    }
    return(
        <div className="search-page">
            <input type="text" className='search-input' name="search" id="search" value={searchValue} placeholder='search a movie or show' onChange={updateSearchValue}/>
            {searchData.map(data => <CategoryContainer title={data.title} products={data.products}/>)}
        </div>
    )
}

export default SearchPage;