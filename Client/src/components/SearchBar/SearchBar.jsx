import style from './Search.module.css';
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.searchBar}>
         <input placeholder='Search a character'type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>
            <img src={require('../../img/Search.png')} alt='Logo de la navBar'/>
         </button>
      </div>
   );
}
