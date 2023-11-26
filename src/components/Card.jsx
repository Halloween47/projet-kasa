import { NavLink } from 'react-router-dom'

function Card({  title, text, id }) {
  return (
    <NavLink  id={id} to={`/Logement/${id}`}>
      <div className="card">
        <h1>{title}</h1>
      </div>
    </NavLink>
  )
}

export default Card
