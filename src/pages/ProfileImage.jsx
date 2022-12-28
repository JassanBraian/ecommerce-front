import React from 'react'
import { useState, useEffect, useContext } from 'react'
import '../css/entities/user/UserMenu.css'
import { Link /* useNavigate */ } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext' /* PARA TRAER AL USER EN LUGAR DE USAR INITIAL VALUES Y USESTATE DE USERINFO */
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import {storage} from '../firebase/FireBaseConfig'
import defaultImg from '../assets/img/register.jpg'
import Swal from 'sweetalert2';


const ProfileImage = () => {

  const InitialValues = {
    _id: "1",
    role: "user",
    photo: "https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg"
  }

  // const [userInfo, setUserInfo] = useState(InitialValues) /* Borrar esto */


  // const {user, updateUser} = useContext(AuthContext) /* PARA TRAER LOS DATOS DEL USER EN LUGAR DE USAR INITAIL VALUES Y USESTATE DE USERINFO*/
  // const [form, setForm] = useState({
  //   photo: userInfo.photo || '' /* Reemplazar userInfo por user */
  // })
  
/*   const {photo} = userInfo */


  /* const onChangeFile = e => {
    const photo = e.target.files[0];
    setForm({...form, photo})
  } */

  /* const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append ('photo', photo);
    updateUser(form)
  } */

  const {getUser} = useContext(AuthContext)
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState([])
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const swaltCustomButton = Swal.mixin({
      customClass: {
        confirmButton: 'submit-button',
        denyButton: 'cancel-button'
      },
      buttonsStyling: false
    })
    swaltCustomButton.fire({
      title: '¿Seguro que quiere guardar los cambios?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        swaltCustomButton.fire('Cambio guardado con exito', '', 'success')
        uploadFiles(file);
      } else if (result.isDenied) {
        swaltCustomButton.fire('No se guardo ningun cambio', '', 'info')
      }
    })
  }
  const imageName = localStorage.getItem("emailUser") // aca hay que tomar el nombre del localStorage con un localStorage.get()

  const uploadFiles = (file)=> {
    
    if(!file) return;
    const extension = file.name.split(".")[1]; // tomo la extension de la imagen

    const storageRef = ref(storage, `/userProfilePic/${imageName}.jpg`); // cambio el nombre de la imagen que quiero guardar con la extension

    const carpetaDeArchivos = ref(storage, "/userProfilePic")

    const uploadTask = uploadBytesResumable(storageRef, file);

    
    uploadTask.on('state_changed', (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    },(err) => console.log(err),
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => {
          console.log(url)
          setImage([url])
        }) /* console.log("url de la imagen -->", url) */
    }
    );
  }

  const imageRef = ref(storage, `userProfilePic/${imageName}.jpg`);

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setImage([url])
      })
  }, [])
 
  useEffect(() => {
    getUser()
  }, [])


  return (

    <div className="wrapper">
      <form /* onSubmit={handleSubmit} */ onSubmit={formHandler}>
        <div id="wizard">
        <Link to='/' className='forgot-link'> Ir a inicio </Link>
	        <h1 className='text-center mb-4'>Foto de usuario</h1>
	        <section>
	            <div className="form-header">
	             	<div className="avartar mb-5">
                        {/* {
                            userInfo.photo && (
                            <img src={userInfo.photo} alt={userInfo.name}/>
                                               <img src={`${process.env.REACT_APP_USER_IMAGES}/${user.photo}}`} classNameName="  profilePic" /> Esto es para que me traiga la foto desde el backend y no desde el front
                        )
                        } */}
                        {/* <img src="https://firebasestorage.googleapis.com/v0/b/fir-9-3d634.appspot.com/o/userProfilePic%2Fvale.alexis18%40gmail.com.jpg?alt=media&token=fe5552ae-d727-4fc5-80d1-9648f284751d"/> */}
                        <div className='d-flex justify-content-center'>
                        {/* {image ? <img className='rounded-circle' src={image} alt="" /> : <img className='rounded-circle' src={defaultImg} alt="" />} */}
                        {img ? <img className='rounded-circle' src={img} alt="" /> : <img className='rounded-circle' src={image} alt="" />}
                        {/* <img className='rounded-circle' src={img} alt="" /> */}
                        </div>
                        <div className="avartar-picker d-flex justify-content-center">
                            <input 
                                type="file"
                                accept='image/*'
                                /* onChange={onChangeFile} */
                                className="inputfile" 
                                name="file-1[]" 
                                id="file-1" 
                                data-multiple-caption="{count} files selected"
                                onChange={onImageChange}
                            />
                            <label htmlFor="file-1">
                                <i className="zmdi zmdi-camera"></i>
                                <span>Elegir imagen de perfil</span>
                            </label>
                        </div>
				    </div>
                </div>
                <h3 className='text-center mb-5'>Porcentaje de subida: {progress}%</h3>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/user-menu' className='forgot-link'> Ir a datos de usuario </Link>
                    <button type="submit" className='submit-button'>Actualizar</button>
                </div>

	        </section>            			
        </div>
      </form>
    </div>
  )
}

export default ProfileImage
