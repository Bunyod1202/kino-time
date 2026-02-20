import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "d3fa18a6b9545ae8395f143821a8d672"
export const API_IMG_URL = "https://image.tmdb.org/t/p/w500"


export const api = {
  getPopularMovies: (page
    ) =>
    axios.get(BASE_URL+"/movie/popular", {
      params: {
        api_key: API_KEY,
        page:page
      }
    }),
    getUpcomingMovies: (page
      ) =>
      axios.get(BASE_URL+"/movie/upcoming", {
        params: {
          api_key: API_KEY,
          page:page
        }
      }),
      getTopRatedMovies: (page
        ) =>
        axios.get(BASE_URL+"/movie/top_rated", {
          params: {
            api_key: API_KEY,
            page:page
          }
        }),
  getMovieId: (movieId) =>
    axios.get(BASE_URL + `/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      }
    }),
  getMovieIdCasts: (movieId) =>
    axios.get(BASE_URL + `/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      }
    }),
    getMovieIdPerson: (movieId) =>
    axios.get(BASE_URL + `/person/${movieId}`, {
      params: {
        api_key: API_KEY,
      }
    }),
  getMovieIdPersonActior: (movieId) =>
    axios.get(BASE_URL + `/person/${movieId}/movie_credits`, {
      params: {
        api_key: API_KEY,
      }
    }),
   
}
