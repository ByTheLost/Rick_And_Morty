import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

function Favorites({ myFavorites }) {

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="allCharacters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      <div className={style.container}>
        {
          myFavorites?.map(fav => {
            return (
              <Card 
                Key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                image={fav.image}
                onClose={fav.onClose}
                />
                )
              })
            }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(
  mapStateToProps,
  null
)(Favorites);