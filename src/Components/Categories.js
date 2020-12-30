import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
export default function Categories({title,fetchUrl}) {

    // baseUrl for movies
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl);
            // console.log(response.data.results)
            setMovies(response.data.results)
            return response;
        }
        fetchData();
    }, [fetchUrl])

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.title || movie?.name || "" )
            .then((url)=>{
                const urlParamas = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParamas.get('v'));
                
            })
            .catch(e=>console.log(e))
        }
    }
    console.log(trailerUrl)
    const opts = {
        height : "450",
        width : "100%",
        playerVars : {
            autoPlay : 1,
        },
    };
    // console.log(movies)
    // movies.map((element)=>(console.log(element.poster_path)))
    return (
        <div>
        <h2 className='mx-2 text-danger font-weight-bold'>{title}</h2>
            <div className="movie-container d-flex">
                {
                    movies.map((element)=>(
                    <div key={element.id} className='poster-wrapper'>
                    <img className='mx-0 posters' height='250px' width='200px'  src={`${baseUrl}${element.poster_path}`} alt={element.movie_name} onClick={() => handleClick(element)}/>
                    <h5 className='text-danger text-center my-2'>{element?.title || element?.original_title}</h5>
                    {/* <button className='btn btn-danger my-2 mx-2'>Watch Trailer</button> */}
                    </div>
                    ))}
            </div>
            {trailerUrl && <Youtube videoId = {trailerUrl} opts = {opts} />}
        </div>
        
    )
}
