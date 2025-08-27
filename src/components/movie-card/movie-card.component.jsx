import { useNavigate } from 'react-router-dom';
import './movie-card.styles.scss'
import { Fragment } from 'react';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const {poster_path,  title, name, id} = movie;
    
    const imageUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    const thumbnailImageUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    
    const navigateToMovie = () => {
        if(title) {
            navigate(`/movie/${id.toString()}`)
        }
        else if(name) {
            navigate(`/tv/${id.toString()}`)
        }
        
    }

    return(
        <Fragment>
            {
                poster_path
                ?
                <div className="movie-card" onClick={navigateToMovie}>
                    <div className="image-container">
                        <img src={imageUrl} alt={title} width={300} height={400}/>
                    </div>
                </div>
                :
                null
            }
        </Fragment>
    )
}

export default MovieCard;