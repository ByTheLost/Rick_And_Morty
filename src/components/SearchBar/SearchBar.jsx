import style from './Search.module.css';
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.searchBar}>
         <input placeholder='Buscar un personaje'type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>
            <img src={require('../../img/Search.png')}/>
         </button>
      </div>
   );
}
