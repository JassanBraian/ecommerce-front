import { useContext } from "react";
import FavoriteContext from "../../../context/favorites/FavoriteContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../../../css/entities/favorites/favoriteList.css'

const FavoriteListItem = ({data}) => {

    console.log(data)
  const {removeFromFavorites } = useContext(FavoriteContext);
  let{_id, publication, title, photos} = data;
  return (
    <div className="listItemContainer">
        <p>{title}id del Usuario</p>
        <p>{publication.title}</p>
        <p>{publication.description} </p>
         {/* <div>{publication.photos[0]}</div>   */}

        
        <button className="removeBtn" onClick={() => removeFromFavorites(_id)}>
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
        
    </div>
  )
}

export default FavoriteListItem