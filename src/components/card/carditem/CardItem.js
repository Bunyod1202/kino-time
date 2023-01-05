import React from 'react'
import { Link } from 'react-router-dom';
import { API_IMG_URL } from '../../../API/API';
import "./carditem.scss"
export const CardItem = ({ img, title, text, date, bage, id }) => {
  return (
    <li className='card' >
      <Link to={`/movie-page/${id}`}>
      <span className='card-badge'>{bage}</span>
    <img className='card-img' width="250" src={API_IMG_URL+img} alt="" />
    <p className='card-title'>{title}</p>
    <p className='card-data'>{date}</p>
        <p className='card-text'>{text}</p>
      </Link>
  </li>
  )
}
