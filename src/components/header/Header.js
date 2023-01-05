
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import "./header.scss"
export const Header = () => {


  return (
    <header>
      <div className="container">
        <div className="header-inner">
        <Link to='/'>
        <img width="130" src={Logo} alt="logo" />
          </Link>
          <form className='search-form'>
            <input type="search"  name='search' className='search-input' />
            <button type='submit' className='search-btn'>search</button>
          </form>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "nav-link item-active" : 'nav-link'
            }  to="/">Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "nav-link item-active" : 'nav-link'
            } to="/upcoming">Upcoming</NavLink>
              </li>
              <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "nav-link item-active" : 'nav-link'
            } to="/top-rated">Top-rated</NavLink>
          </li>
        </ul>
      </nav>
        </div>
      </div>
    </header>
  )
}
