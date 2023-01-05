
import { CardItem } from '../carditem/CardItem'
import "./cardlist.scss"
export const CardList = ({cards}) => {

  return (
    <ul className='card-list'>
      {
        cards?.map((card) => 
          <CardItem key={card.id} id={card.id} img={card.poster_path} title={card.title} date={card.release_date} text={card.overview} bage={card.vote_average} />
        )}
    </ul>
  )
}
