import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { api, API_IMG_URL } from '../../API/API';
import "./movieid.scss"

export const MovieId = () => {
  const { movieId } = useParams();
  const [cards, setCards] = useState({})
  const [casts, setCasts] = useState([])
  useEffect(() => {
    const getPopular = async () => {
      const card = await api.getMovieId(movieId)
      // console.log(card);
      setCards(card?.data)
    }
    
    const getPopularCasts = async () => {
      const cardCasts = await api.getMovieIdCasts(movieId)
      // console.log(cardCasts);
      setCasts(cardCasts.data.cast)
    }
    getPopular() 
    getPopularCasts()
  }, [movieId])
  console.log("salom" , casts)
  return (
    <>
      <section className='movie-id-section' style={{
       
            backgroundImage: `url(${cards.backdrop_path === undefined ? "default" : "https://image.tmdb.org/t/p/original"+cards.backdrop_path})`
          }}>
        <div className="movie-id-section-inner">
          <div className="container">
            <div className="movie-id">
              <img width={250} src={ cards.poster_path === undefined ? "" : API_IMG_URL + cards.poster_path
              } alt={cards.title} />
              <div className="movie-id-content">
                <p className="movie-id-title">{cards.title}</p>
                <p className="movie-id-text">{cards.overview}</p>
                <p className="movie-id-date">{cards.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='actiors'>
        <ul className='card-list' >
        {
                casts?.map((cast, index) =>
                <Link className='card' key={index} to={`/casts/${cast.id
                }`}>
                  <div  className='item'>
                    <img width={250} src={cast.profile_path === null ? " " : API_IMG_URL + cast.profile_path} alt={cast.name} />
                    <p>{cast.name}</p>
                  </div>
                </Link>
              )
            }
        </ul>
        {

            <OwlCarousel className='owl-theme' items={5} smartSpeed={10000} autoplay={true} autoplayTimeout={500} autoplayHoverPause={false} loop margin={10} >
        
            </OwlCarousel>

       }
            
      </section>
    </>
  )
}
