import style from'./Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to='/home'>
          <img src={require('../../img/RAM.png')} alt='Logo de Rick and Morty'/>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch}/>
      <nav>
        <ul className={style.navlinks}>
          <li>
          </li>
          <li>
            <NavLink className='Link' to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink className='Link' to='/about' >About</NavLink>
          </li>
          <li>
            <NavLink className='Link' to='/favorites'>Favorites</NavLink>
          </li>
          <li>
            <NavLink className='Link' to='!#'>Random</NavLink>
          </li>
        </ul>
      </nav>
      <navlinks to='!#' className={style.btn}>
        <button onClick={logout}>Log out</button>
      </navlinks>
      <NavLink to='/contact'className={style.btn}>
        <button>Contact</button>
      </NavLink>
    </div>
  )
}

export default Nav;