import { useParams } from 'react-router-dom';
import './movie-details.styles.scss'
import { useEffect, useState } from 'react';


const MovieDetails = ({category}) => {
    const {id} = useParams();
    const sources = {
        check: `https://playerhost.net/show/breaking-bad/01-01`,
        superEmbed: category === 'tv' ? `https://multiembed.mov/?video_id=${id}&tmdb=1&s=1&e=1` : `https://multiembed.mov/?video_id=${id}&tmdb=1`,
        blackVid: category === 'tv' ? `https://blackvid.space/embed?tmdb=${id}&season=1&episode=1` : `https://blackvid.space/embed?tmdb=${id}`,
        embed2: category === 'tv' ? `https://www.2embed.cc/embedtv/${id}&s=1&e=1` : `https://www.2embed.cc/embed/${id}`,
        VidSrc: `https://vidsrc.xyz/embed/${category}?tmdb=${id}&color=2986cc`,
        moviesApi: `https://moviesapi.club/${category}/${id}`,
        
    }
    const [currentSource, setCurrentSource] = useState(sources.VidSrc);
    const [currentElement, setCurrentElement] = useState(null);
    
    // const getCurrentShowDetails = async () => {
    //     const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    
        
    // }

    // if(category === 'tv') {
    //     getCurrentShowDetails();
    // }

    useEffect(() => {
        const current = document.querySelector('#VidSrc');
        current.className = `${current.className} selected`
        setCurrentElement(current)
    }, [])

    const changeSource = (e) => {
        currentElement.className = 'source';
        e.target.className = `${e.target.className} selected`;
        setCurrentElement(e.target);
        setCurrentSource(sources[e.target.id]);
    }

    // if (currentSource === sources.embed2) {
    //     const frame = document.querySelector('iframe');
    //     frame.sandbox = "allow-forms allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation";
    // }

    return(
        <div className="movie-details">
            <iframe title='video' src={currentSource} referrerpolicy="origin" allowFullScreen='true'></iframe>
            <div className="sources">
                <div className='source' id='VidSrc' onClick={changeSource}>VidSrc</div>
                <div className='source' id='embed2' onClick={changeSource}>embed2</div>
                <div className='source' id='moviesApi' onClick={changeSource}>Movies Api</div>
                <div className='source' id='superEmbed' onClick={changeSource}>Super Embed</div>
                <div className='source' id='blackVid' onClick={changeSource}>Black Vid</div>
                <div className='source' id='check' onClick={changeSource}>Check</div>
            </div>
        </div>
    )
}

export default MovieDetails;