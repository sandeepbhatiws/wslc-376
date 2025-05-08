import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function MovieListing() {

    const searchName = useRef();

    let [searchValue, setSearchValue] = useState('');
    let [movieData, setMovieData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);

    var APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';

    var searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';


    useEffect( () => {
        if(searchValue == ''){
            var url = APIURL+currentPage;
        } else {
            var url = searchAPI+searchValue;
        }

        axios.get(url)
        .then((response) => {
            if(response.data.results){
                setMovieData(response.data.results)
            } else {
                toast.error('Something went wrong !!');
            }
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })
    },[searchValue, currentPage]);

    const searchMovie = (event) => {
        // setSearchValue(event.target.value);
        setSearchValue(searchName.current.value);
    }

    const previous = () => {
        if(currentPage > 1){
            currentPage--;
            setCurrentPage(currentPage);
        }
    }

    const next = () => {
        currentPage++;
        setCurrentPage(currentPage);
    }


  return (
    <>
      <div className="main">
        <div className="row" style={{ 'justifyContent' : 'center' }}>
            <input type="search" id="search" autoFocus autoComplete="off" placeholder="Search here..." onKeyUp={ searchMovie } ref={searchName}/>
        </div>
        <div className="row" id="movie-box">
            {
                movieData.map((value, index) => {
                    return(
                        <MovieCard key={index} movie={value}/>
                    )
                })
            }
            
        </div>


        <div className='buttons'>
            <button onClick={ previous }>Previous</button>
            <button onClick={ next }>Next</button>
        </div>
    </div>
    </>
  )
}
