import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.content}>
               <button className={style.btn} onClick={() => onClose(id)}>X</button>

               <Link to={`/detail/${id}`}>
                  <h4>Name: <h4 className={style.message}>{name}</h4></h4>
               </Link>
            
               <h4>Status: <h4 className={style.message}>{status}</h4></h4>
               <h4>Species: <h4 className={style.message}>{species}</h4></h4>
               <h4>Gender: <h4 className={style.message}>{gender}</h4></h4>
               <h4>Origin: <h4 className={style.message}>{origin}</h4></h4>
               <img src={image} alt='' />
            </div>
         </div>
      </div>
   );
}
