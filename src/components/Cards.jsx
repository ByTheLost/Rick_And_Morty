import Card from './Card';
import '../styles/Cards.css'

export default function Cards({ characters, onClose }) {

   return (
      <div className='container'>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
                  <Card
                  Key = {id}
                  id = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onClose={onClose}
                  />
                  )
               })
            }
      </div>
   )
}
