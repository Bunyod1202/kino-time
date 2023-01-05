// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../API/API'
import { CardList } from '../../components/card/cardlost/CardList'
import { Pagination } from '../../components/pagination/Pagination'

export const Home = () => {
  const [cards, setCards] = useState([])
  const [pages, setPages] = useState(1)
  useEffect(() => {
  const getPopular = async () => {
    // const cards = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d2b31519940c66a2ca1b4d18163cef94&page=2`)
     const card = await api.getPopularMovies(pages)
    setCards(card.data)
  } 

    getPopular()
  }, [pages, setCards])

  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="hero-inner">
            <CardList cards={cards?.results} />
            <Pagination
              pagecaunts={cards.total_pages}
              cauntpage={setPages}
              paginations={pages}
            />  
          </div>
        </div>
      </section>

    </>
  )
}
