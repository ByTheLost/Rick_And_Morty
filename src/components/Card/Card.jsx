import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.content}>

               <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);