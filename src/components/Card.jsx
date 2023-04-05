import '../styles/Card.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className='container'>
         <div className='card'>
            <div className='content'>
            <button onClick={() => onClose(id)}>X</button>
            <h4>Name: {name}</h4>
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
