import { NavLink } from 'react-router-dom'

function Card({  title, text, id, image }) {
  return (
    <NavLink  id={id} to={`/logement/${id}`}>
      <div className="card">
        <p>{title}</p>
        <img src={image} alt="" />
      </div>
    </NavLink>
  )
}

export default Card
