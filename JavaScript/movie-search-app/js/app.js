const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const getMovieData = async(url) => {
    var data = await fetch(url);
    var data = await data.json();
    showMovies(data.results);
}

const showMovies = (movie) => {

    var movieFetch = '';

    movie.forEach((value) => {
        console.log(value);
        movieFetch += `<div class="box">
            <img src="${ IMGPATH }${ value.poster_path }" alt="" />
            <div class="overlay">
                <div class="title"> 
                    <h2> ${ value.title } </h2>
                    <span> ${ value.vote_average } <span>
                </div>
                <h3>Overview:</h3>
                <p> 
                    ${ value.overview }
                </p>
            </div>
        </div>`
    });

    document.getElementById('movie-box').innerHTML = movieFetch;

}

getMovieData(APIURL);

document.getElementById('search').addEventListener('keyup',(event) => {
    var newSearchUrl = SEARCHAPI+event.target.value;
    getMovieData(newSearchUrl);
    console.log(newSearchUrl);
})
