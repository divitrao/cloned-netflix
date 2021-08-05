

import Tmdb_Api from "./API_keys"

const requests = {
    fetchTrending  :`/trending/all/week?api_key=${Tmdb_Api.keys}&language=en-US`,
    fetchNetflixOriginal  :`/discover/tv?api_key=${Tmdb_Api.keys}&with_networks=213`,
    fetchTopRated  :`/trending/all/day?api_key=${Tmdb_Api.keys}&language=en-US`,
    fetchActionMovies  :`/movie/top_rated?api_key=${Tmdb_Api.keys}&with_genres=28`,
    fetchComedyMovies  :`/discover/movie?api_key=${Tmdb_Api.keys}&with_genres=35`,
    fetchHorrorMovies  :`/discover/movie?api_key=${Tmdb_Api.keys}&with_genres=27`,
    fetchRomanceMovies  :`/discover/movie?api_key=${Tmdb_Api.keys}&with_genres=10749`,
    fetchDoumentary :`/discover/movie?api_key=${Tmdb_Api.keys}&with_genres=99`,
}

export default requests