import { Fragment, useContext, useEffect, useState } from 'react';
import './search-box.styles.scss'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { DataContext } from '../../contexts/data.context';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationMobile from '../navigation-mobile/navigation-mobile.component';


const SearchBox = () => {
    const {updateSearch, updateCategory} = useContext(DataContext);
    const [searchValue, setSearchValue] = useState('');
    const [currentCategory, setCurrentCategory] = useState(null);
    const navigate = useNavigate()
    const navigateToSearchResults = () => {
        navigate('search')
    }
    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
        updateSearch(e.target.value)
    }

    useEffect(() => {
        console.log('current');
        const current = document.querySelector('#home');
        current.className = 'link selected';
        setCurrentCategory(current);
    }, [])
    

    const setTvOrMovie = (e) => {
        console.log(currentCategory);
        console.log(e.target);
        currentCategory.className = 'link';
        e.target.className = 'link selected';
        setCurrentCategory(e.target);
        const value = e.target.id;
        updateCategory(value);
    }
    return(
        <Fragment>
            <NavigationMobile/>
            <div className="navigation-container">

                <div className="navigation-left">
                    <div className="logo-container">MYFLIX</div>
                    <div className="links-container">
                        <Link to='' id="home" className='link' onClick={setTvOrMovie}>Home</Link>
                        <Link to='tv' id="tv" className='link' onClick={setTvOrMovie}>TV Shows</Link>
                        <Link to='movie' id="movie" className='link' onClick={setTvOrMovie}>Movies</Link>
                        <Link to='new' id="movie" className='link' onClick={setTvOrMovie}>New & Popular</Link>
                        <Link to='mylist' id="movie" className='link' onClick={setTvOrMovie}>My List</Link>
                        <Link to='lang' id="movie" className='link' onClick={setTvOrMovie}>Browse by Languages</Link>
                    </div>
                </div>

                <div className="navigation-right">
                    <div className="search-box">
                        <input type='text' value={searchValue} onChange={updateSearchValue} placeholder='Search a Movie or Show'/>
                        <FontAwesomeIcon onClick={navigateToSearchResults} icon={faSearch} className='search-icon'/>                        
                    </div>
                </div>

            </div>
            <Outlet/>
        </Fragment>
    
    )
}   

export default SearchBox;