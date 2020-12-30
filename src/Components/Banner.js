import React, { useEffect, useState } from 'react'
import axios from '../axios';
import request from '../request'
import '../Banner.css'
export default function Banner() {
    // Images
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const [banner,setBanner] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(request.fetchTrending);
            setBanner(
                response.data.results[Math.floor(Math.random() * response.data.results.length)]
            )
            return response;
        }
        fetchData();
    }, [])
    var stringTruncate = function(str, length){
        var dots = str.length > length ? '...' : '';
        return str.substring(0, length)+dots;
      };
    // console.log(banner)
    return (
        <>
        <header className='header'
        style = {{
            backgroundSize:"cover",
            backgroundPositionY:"-200px",
            backgroundImage:`url(${baseUrl}${banner.poster_path})`,
            backgroundPosition:"center cover",
        }}
        >
                {/* Handling egde cases iff there is any issue with the response */}
                <div className="banner-contents">
                <h1>{banner?.title || banner?.name || banner?.original_title}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button btn btn-danger my-2'>Watch Trailer</button>
                </div>
                <h6 className="text-white">{stringTruncate(String(banner.overview),250)}</h6>
                </div>
        </header>
        </>
    )

}
