import React from 'react'
import '../../../css/common/SearchBar/Card.css'

const Card = (props) => {
  const { movie } = props
  return (

    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title}></img>
      <div className="card-body">
        <h2 className="card-title mb-1">Frenchie</h2> {/* movie.name */}
        <p className="card-text">Cachorro 3 meses, mestizo. Se lleva bien con otros animales</p> {/* movie.description */}
        <div className='d-flex justify-content-center'>
          <button className='favBtn '>Marcar como favorito</button>
        </div>
        <a to="/" className='asd'>+Ver más</a>

      </div>
    </div>
  )
}

export default Card