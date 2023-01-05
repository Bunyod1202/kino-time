
// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../API/API'
import { CardList } from '../../components/card/cardlost/CardList'
import { Pagination } from '../../components/pagination/Pagination'

export const TopRated = () => {
  const [cards, setCards] = useState([])
  const [pages, setPages] = useState(1)
  useEffect(() => {
  const getPopular = async () => {
     const card = await api.getTopRatedMovies(pages)
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
