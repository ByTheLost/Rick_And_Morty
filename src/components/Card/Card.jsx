import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.content}>
               <button className={style.btn} onClick={() => onClose(id)}>X</button>

               <Link to={`/detail/${id}`}>
                  <h4>Name: <p className={style.message}>{name}</p></h4>
               </Link>
            
               <h4>Status: <p className={style.message}>{status}</p></h4>
               <h4>Species: <p className={style.message}>{species}</p></h4>
               <h4>Gender: <p className={style.message}>{gender}</p></h4>
               <h4>Origin: <p className={style.message}>{origin}</p></h4>
               <img src={image} alt='' />
            </div>
         </div>
      </div>
   );
}
