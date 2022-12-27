
import FavoriteListItem from './FavoriteListItem'
import { useContext, useEffect } from "react";
import { useState } from 'react';
import FavoriteContext from "../../../context/favorites/FavoriteContext";
import '../../../css/entities/favorites/favoriteList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faStar } from '@fortawesome/free-solid-svg-icons' */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const FavoriteList = () => {
    const [isActive, setIsActive] = useState(false);
    const hideDropdown = () =>{setIsActive(false)}
    useEffect(() => {
        document.addEventListener('click', hideDropdown, false);
        return () => {
         document.removeEventListener('click', hideDropdown, false);
        };
       }, []);
    
  const {favorites, getFavorites} = useContext(FavoriteContext);
  return (
    <div className="dropdown d-flex justify-content-center">
        <button className="dropdown-btn" onClick={(e) =>{ 
                e.stopPropagation()
                setIsActive(!isActive)
                getFavorites()
                
        }}
                >
            <span>
                <FontAwesomeIcon icon={faCartShopping} className='icon' />

            </span>
            </button>
        {isActive && (
        <div className="dropdown-content container-fluid row">
                {
                    favorites.map((item, index) =>
                     <div className='dropdown-item container-fluid'>
                        <FavoriteListItem key={index} data={item} />
                    </div>)
                 }
        </div>
        )}
    </div>
    // <div>
    //     <div className="dropdown">
    //         <button className=" dropdown-toggle favoriteListBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleOnClick}>
    //         <FontAwesomeIcon icon={faStar} size="1x" />
    //             Mis Favoritos
    //         </button>
    //         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //             {
    //                 favorites.map((item, index) =>
    //                  <li className='listItem'>
    //                     <FavoriteListItem key={index} data={item} />
    //                 </li>)
    //             }
                
    //         <button onClick={clearFavorites}>Limpiar mi lista de favoritos</button>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default FavoriteList;