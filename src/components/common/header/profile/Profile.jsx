import '../../../../css/common/header/profile.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getDownloadURL, ref } from '@firebase/storage';
import {storage} from '../../../../firebase/FireBaseConfig'


const Profile = (props) => {
    const [showProfileMenu, setIsShowProfileMenu] = useState(false);

    const showProfileMenuHandler = () => {
        //setIsShowProfileMenu(true);
        setIsShowProfileMenu(prevCheck => !prevCheck);
    }
    const hideHandler = () => {
        setIsShowProfileMenu(false);
    }

    // USER IMAGE ----------------------------------
    const imageName = localStorage.getItem("emailUser")
    const [image, setImage] = useState([])
    
      const imageRef = ref(storage, `userProfilePic/${imageName}.jpg`);
    
      useEffect(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setImage([url])
          })
      }, [image])


    //-----------------------------------------

    return (
        <>
            <div className='profile__top'>
                <img src={image} alt="profile pic" onClick={showProfileMenuHandler} />
                {
                    showProfileMenu &&
                    <div className='dropdown'>
                        <Link to={'./user-menu'} onClick={hideHandler} className='Link'>
                            <p>Editar info de perfil</p>
                        </Link>
                        <Link to={'./profile-image'} onClick={hideHandler} className='Link'>
                            <p>Foto de perfil</p>
                        </Link>

                        <p onClick={props.loginButtonHandler} >Salir</p>
                    </div>
                }
            </div>
        </>
    )
}
export default Profile;