import { Link } from 'react-router-dom';
import './navigation-mobile.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faSearch, faTelevision, faTv } from '@fortawesome/free-solid-svg-icons';

const NavigationMobile = () => {
    return(
        <div className="navigation-mobile">
            <Link to='' className='nav-link'>
                <FontAwesomeIcon icon={faHome} className='nav-icon'/>
                <span>Home</span>
            </Link>
            <Link to='search' className='nav-link'>
                <FontAwesomeIcon icon={faSearch} className='nav-icon'/>
                <span>search</span>
            </Link>
            <Link to='tv' className='nav-link'>
                <FontAwesomeIcon icon={faTelevision} className='nav-icon'/>
                <span>TV</span>
            </Link>
            <Link to='movie' className='nav-link'>
                <FontAwesomeIcon icon={faFilm} className='nav-icon'/>
                <span>Movies</span>
            </Link>
        </div>
    )
    
}

export default NavigationMobile;