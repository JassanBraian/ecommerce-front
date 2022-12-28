
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import '../css/entities/user/UserMenu.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext'
import Swal from 'sweetalert2';


const UserMenu = () => {
  const {user, updateUser, getUser} = useContext(AuthContext) 
  const [userMenuErrors, setUserMenuErrors] = useState({});

  const InitialValues = {
    email: '',
    name: '',
    surname: ''
  }
  
  const [form, setForm] = useState(InitialValues)
  
  const {name, surname, email} = form

  const emailValidation = input => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(input.value) ? true : false;
  }

 
  useEffect(() => {
    Object.keys(user).length > 0
            && setForm(user);
  }, [user])
  

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleOnBlur = (e) =>{
    if(e.target.value === "") {
      setUserMenuErrors({
        ...userMenuErrors,
        [e.target.name] : "Campo obligatorio"
      });
    } else if (e.target.name === "email" && !emailValidation(e.target)) {
      setUserMenuErrors({
            ...userMenuErrors,
            [e.target.name] : `Email no válido`
          });
    }
    else { 
      setUserMenuErrors({
        ...userMenuErrors,
        [e.target.name] : "",
      });
    } 
  };

  const handleSubmit = e => {
    e.preventDefault();
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
        updateUser(form)
        swaltCustomButton.fire('Cambio guardado con exito', '', 'success')
      } else if (result.isDenied) {
        swaltCustomButton.fire('No se guardo ningun cambio', '', 'info')
        getUser()
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div id="wizard">
        <Link to='/' className='forgot-link'> Ir a inicio </Link>
	        <h1 className='text-center'>Datos de usuario</h1>
	          <section>
						  <div className="form-group">
							  <div className="form-holder">
                  <label>Nombre:</label>
								  <input
                    type="text"
                    onChange={handleChange}
                    value={name}
                    name='name'  
                    className="form-control"
                    onBlur={handleOnBlur}
                    maxLength='20'
								  />
                  <p>{userMenuErrors.name}</p>
							  </div>
							  <div className="form-holder">
                  <label>Apellido:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={surname}
                    name='surname' 
                    className="form-control"
                    onBlur={handleOnBlur}
                    maxLength='20'
                  />
                  <p>{userMenuErrors.surname}</p>
							  </div>
						
	              <div className="form-holder">
                  <label>Email:</label>
                  <input 
                    type="email"
                    onChange={handleChange}
                    value={email}
                    name='email' 
                    className="form-control"
                    onBlur={handleOnBlur}
                    maxLength='30'
                    minLength='8'
                  />
                  <p>{userMenuErrors.email}</p>
							  </div>
						  </div>

              <div className='d-flex justify-content-between align-items-center'>
              <Link to='/profile-image' className='forgot-link'> Ir a foto de perfil </Link>
                <button disabled={Object.values(form).some((value) => value === "")} 
                                type="submit" 
                                className='form-submit-button'>Enviar</button>



              </div>

	          </section>
	                
					
        </div>
      </form>
		</div>
  )
}

export default UserMenu