import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const casa = props.data;
  return (
    <Link to={`/view/${casa._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ casa.nome }</h5>
          <span className="badge bg-primary">{ casa.tipo }</span>
          <span className="badge bg-primary">{ casa.localizacao }</span>
          <span className="badge bg-primary">{ casa.imagemUrl }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
