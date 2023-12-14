import { useNavigate } from 'react-router-dom';
import './movie-card.styles.scss'

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const {poster_path, release_date, title, overview, name, id} = movie;
    const imageUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;


    const navigateToMovie = () => {
        if(title) {
            navigate(`/movie/${id.toString()}`)
        }
        else if(name) {
            navigate(`/tv/${id.toString()}`)
        }
        
    }

    return(
        <div className="movie-card" onClick={navigateToMovie}>
            <div className="image-container">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default MovieCard;