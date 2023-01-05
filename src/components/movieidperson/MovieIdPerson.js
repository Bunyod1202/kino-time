import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { api, API_IMG_URL } from '../../API/API';
import "./movieidperson.scss"

export const MovieIdPerson = () => {
  const { movieId } = useParams();
  const [cards, setCards] = useState({})
  const [casts, setCasts] = useState([])
  useEffect(() => {
    const getPopular = async (id) => {
      const card = await api.getMovieIdPerson(id)
      // console.log(card);
      setCards(card?.data)
    }
    getPopular(movieId)

    const getPopularCasts = async (id) => {
      const cardCasts = await api.getMovieIdPersonActior(id)
      console.log(cardCasts);
      setCasts(cardCasts.data.cast)
    }
    getPopularCasts(movieId)
  }, [movieId])

  return (
    <>
      <section className='movie-id-section'>
        <div className="movie-id-section-inner">
          <div className="container">
            <div className="movie-id">
              <img width={250} src={API_IMG_URL + cards.profile_path
              } alt={cards.title} />
              <div className="movie-id-content">
                <p className="movie-id-title">{cards.name}</p>
                <p className="movie-id-text">{cards.biography}</p>
                <p className="movie-id-date">{cards.birthday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='actiors'>
        <OwlCarousel className='owl-theme' items={5} smartSpeed={10000} autoplay={true} autoplayTimeout={500} autoplayHoverPause={false} loop margin={10} nav>

        </OwlCarousel>;
        <ul className='card-list'>
          {
            casts?.map((cast, index) =>
              <Link className='card' key={index} to={`/movie-page/${cast.id}`}>
                <div className='item'>
                  <img width={250} height={350} src={API_IMG_URL + cast.poster_path} alt={cast.name} />
                  <p>{cast.title}</p>
                </div>
              </Link>
            )
          }

        </ul>
      </section>
    </>
  )
}
