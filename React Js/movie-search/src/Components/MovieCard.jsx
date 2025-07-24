import React from 'react'
import imageMissing from '../assets/images/image-missing.png';

export default function MovieCard({movie}) {

    if(movie.poster_path){
        var image = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
    } else {
        var image = imageMissing;
    }

    return (
        <>
            <div className='box'>
                <img src={image}/>
                <div class="overlay">
                    <div class="title">
                        <h2> {movie.title} </h2>
                        <span> {movie.vote_average} </span>
                    </div>
                    <h3>Overview:</h3>
                    <p>
                        { movie.overview }
                    </p>
                </div>
            </div>
        </>
    )
}
