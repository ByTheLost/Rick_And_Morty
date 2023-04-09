import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.content}>
               <button onClick={() => onClose(id)}>X</button>

               <Link to={`/detail/${id}`}>
                  <h4>Name: {name}</h4>
               </Link>
            
               <h4>Status: {status}</h4>
               <h4>Species: {species}</h4>
               <h4>Gender: {gender}</h4>
               <h4>Origin: {origin}</h4>
               <img src={image} alt='' />
            </div>
         </div>
      </div>
   );
}