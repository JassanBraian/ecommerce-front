
import '../../../../css/entities/publication/cards/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import FavoriteContext from "../../../../context/favorites/FavoriteContext";
import { Link } from 'react-router-dom';



const Card = (props) => {
  const {addToFavorites, removeFromFavorites, isFavorite} = useContext(FavoriteContext);
  
  const onToggleFavorite = ()=>{
    if(isFavorite(1234, props.postId)){
      removeFromFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    } else{
      addToFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    }
  };
  return (
    <>
    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
    <div className= {props.isHighlighted ? "destacada" :"card"}>
        <img src= {props.image} className="card-img-top img-fluid" alt= '' />
        <div className="card-body">
        <img src="https://estaticos-cdn.prensaiberica.es/clip/1fa3b0c5-a0ba-46e4-a69a-7609feb0f9f7_16-9-aspect-ratio_default_0.jpg" className="card-img-top img-fluid" alt= '' />
            <h1 className="card-title">{props.title}</h1>  
            <p className="card-text">{props.description}</p>
             {!isFavorite(1234, props.postId) ? 
            <button className="favouriteButton" onClick={onToggleFavorite}>
            <FontAwesomeIcon icon={faStar} />
                Marcar como favorito
            </button>
            : <button className="favouriteButton" onClick={onToggleFavorite}>
            <FontAwesomeIcon icon={faTrashCan} />
                Eliminar de mis favoritos
            </button>}
        </div>
        <Link to={`/single-publication/${props.postId}`} className="stretched-link"></Link>
    </div>
    </div>
    </>
  )
}

export default Card;