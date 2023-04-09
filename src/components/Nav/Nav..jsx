import style from'./Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to='/home'>
          <img src={require('../../img/RAM.png')} />
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
            <a className='Link'>Random</a>
          </li>
        </ul>
      </nav>
      <NavLink to='/contact'className={style.btn}>
        <button>Contacto</button>
      </NavLink>
    </div>
  )
}

export default Nav;