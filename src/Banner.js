import React, { useEffect, useState } from 'react'
import instance from './axios'
import requests from './Request'
import './banner.css'

export default function Banner() {
    const [movie,setmovie] = useState([])

    useEffect(()=>{
        async function fetchData(){

            const request = await instance.get(requests.fetchNetflixOriginal)
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            return request

        }

        fetchData()
    },[])
    return (
        <header className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition : 'center center'
          }} >
            <div className='banner__contents'>
            {/* title */}
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

            <h1 className="banner__discription">
                {movie?.overview}

            </h1>
            </div>
          <div className="banner--fadeBottom"></div>
        </header>
    )
}
