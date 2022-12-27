
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/ForgotPassword.css'
import logoExample from '../assets/img/adidas-logo-branco.png'
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const { forgotPassword, successMsg, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
    });
    const { email } = form;

    const [forgotPasswordErrors, setForgotPasswordErrors] = useState({});
    const navigate = useNavigate();

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const emailValidation = input => {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(input.value) ? true : false;
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const swaltCustomButton = Swal.mixin({
            customClass: {
              confirmButton: 'submit-button',
              denyButton: 'cancel-button'
            },
            buttonsStyling: false
          })
          swaltCustomButton.fire({
            title: '¿Quiere enviar el mail?',
            showDenyButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              forgotPassword(form);
              swaltCustomButton.fire('Email Enviado', '', 'success')
              navigate('/')
            } else if (result.isDenied) {
              navigate('/')
            }
          })
    }

    const handleOnBlur = (e) => {
        if (e.target.value === "") {
            setForgotPasswordErrors({
            ...forgotPasswordErrors,
            [e.target.name]: "Campo obligatorio"
          });
        } else if (e.target.name === "email" && !emailValidation(e.target)) {
            setForgotPasswordErrors({
                ...forgotPasswordErrors,
                [e.target.name] : `Email no válido`
              });
        } else {
            setForgotPasswordErrors({
            ...forgotPasswordErrors,
            [e.target.name]: ``,
          });
    
        }
    
      };

/*       useEffect(() => {
        navigate('/')
    }, [isAuth]) */

    return (
        <div className="wrapper">
            <form onSubmit={handleOnSubmit}>
                <div id="forgot-wizard">
	                <section>
	                    <div className="form-header">
	             	        <div className="d-flex justify-content-center logo-img mb-3">
                                <img className='logo-img' src={logoExample} alt="logo"/>
							</div>
	                    </div>
						<div className="form-group">
                                <h2 className='text-center mb-3'>Recuperacion de contraseña</h2>
                                <p className='instruction-text text-white mb-5'>Acontinuacion introduzca su dirección de correo para que podamos ponernos en contacto con usted e indicarle las instrucciones necesarias para recuperar o cambiar su contraseña</p>
							<div>
                              
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="email@email.com"
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                    className="form-control mt-2"
                                    minLength='8'
                                    maxLength='30'
                                />
                                <p className='forgot-required-field'>{forgotPasswordErrors.email}</p>
							</div>
	                    </div>

                        <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/' className='forgot-link'> Volver a inicio </Link>
                                <button
                                disabled={Object.values(form).some((value) => value === "")} 
                                type="submit" 
                                className='form-submit-button'
                            >Enviar</button>
                        </div>
        	        </section>      				
                </div>
            </form>

      {
            successMsg && <p>{successMsg}</p> /* Aqui hacer que se muestre loading de carga */
      }
		</div>
    );
}

export default ForgotPassword;
