import { NavLink } from 'react-router-dom'

function Card({ key, title, text, id }) {
  return (
    <NavLink key={key} id={id} to={`/Logement/${id}`}>
      <div className="card">
        <h1>{title}</h1>
      </div>
    </NavLink>
  )
}

export default Card
