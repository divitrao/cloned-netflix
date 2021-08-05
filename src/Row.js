import React, { useEffect, useState } from 'react'
import instance from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_img_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetcurl, isLargeRow}) {
    
    const [movie,setmovie] = useState([])
    const [trailerUrl,setTrailerUrl] = useState("")

useEffect(()=>{

    async function fetchData(){
        const  request  = await instance.get(fetcurl)
        // console.log(request.data.results)
        setmovie(request.data.results)
        return request
    }

    fetchData()

},[fetcurl])

// console.log(movie)
// console.log(`${base_img_url}${movie.poster_path}`)
const opts = {
    height: '300',
    width: '100%',
    playerVars: {
        autoplay : 1
    }
}

const handleCLick = (movie)=>{
    console.log(movie?.id)
    if (trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie.name || ' ' )
        .then((url)=>{
            console.log(url)
            const urlparams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlparams.get('v'))
        })
        .catch((error)=>{
            console.log(error)
        })
    }

}

    return (
        <div className="row">   
        <div>
            <h2>{title}</h2>
        </div>
        <div className="row__posters">
            {movie.map(movie=>(
                <img key={movie.id} onClick={()=>handleCLick(movie)} className={`row__poster ${isLargeRow && 'row__posterlarge'}`} src={`${base_img_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} ></img>
            ))}

        </div>
        { trailerUrl &&  <YouTube videoId={trailerUrl} opts = {opts}/> }
        </div>
    )
}

export default Row
