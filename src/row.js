import React from 'react';
import { useState, useEffect } from 'react';
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) /* destructing  */ {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setUrl]=useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);// depended on that variable so dependencies outside of the block 
    const video_option={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
 const handelclick = (movie) => {
  if (trailerUrl) {
    setUrl("");
  } else {
    const movieName = movie?.name || movie?.title || movie?.original_name || "";
    console.log("Searching trailer for:", movieName);

    movieTrailer(movieName)
      .then((url) => {
        if (!url) {
          console.warn("No trailer found for:", movieName);
          setUrl("");
          return;
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        setUrl(urlParams.get("v"));
        console.log("Trailer URL:", url);
      })
      .catch((error) => {
        console.error("Error fetching trailer:", error);
        setUrl("");
      });
  }
};

    return (
        <div className='row'>
            <h2> {title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                     className={`row_poster ${isLarge ? "row_posterLarge" : ""}`}
                     onClick={()=>handelclick(movie)}
                        key={movie.id}
                        src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                   
                        />
                ))}   
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl}opts={video_option}/>}
        </div>
    );
}

export default Row;

