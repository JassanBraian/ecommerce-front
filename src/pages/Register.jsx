import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';


const Register = () => {
    const navigate = useNavigate();
    const { registerUser, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { name, surname, email, password, passwordConfirm } = form;
    const [registerErrors, setRegisterErrors] = useState({});

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            setRegisterErrors({
              ...registerErrors,
              "password": 'Contraseñas no coinciden',
              "passwordConfirm" : 'Contraseñas no coinciden'
            });
            return;
          }
        registerUser(form);
    }
    
    const emailValidation = input => {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(input.value) ? true : false;
    }

    const handleOnBlur = (e) =>{
        if(e.target.value === "") {
            setRegisterErrors({
            ...registerErrors,
            [e.target.name] : "Campo obligatorio"
          });
        } else if (e.target.name === "email" && !emailValidation(e.target)) {
            setRegisterErrors({
                ...registerErrors,
                [e.target.name] : `Email no válido`
              });
        }
        else { 
            setRegisterErrors({
            ...registerErrors,
            [e.target.name] : "",
          });
        } 
      };


      useEffect(() => {
        if(isAuth) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro exitoso',
                showConfirmButton: false,
                timer: 1200
              })
        }
    }, [isAuth])

    useEffect(() => {
        isAuth && navigate('/');
    }, [isAuth])

    return (
        <>
            {/* <div className='title'>Registrate</div> */}

        <div className='wrapper'>
            <form onSubmit={handleOnSubmit}>
            <h1 className='text-center register-page'>CREAR CUENTA</h1>
            <div id="register-wizard">
            <h1 className='text-center register-title mb-4'>Ingrese su información personal en el siguiente formulario  </h1>
                    <section>
                        <div className="form-group">
                            <div>
                                <label className='register-name'>Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su nombre"
                                    className="form-control mt-2"
                                    onBlur={handleOnBlur}
                                    maxLength='20'
                                />
                                <p className='register-required-field'>{registerErrors.name}</p>
                            </div>
                            <div>
                                <label className='register-surname'>Apellido</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={surname}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su apellido"
                                    className="form-control mt-2"
                                    onBlur={handleOnBlur}
                                    maxLength='20'
                                />
                                <p className='register-required-field'>{registerErrors.surname}</p>
                            </div>
                            <div>
                                <label className='register-email'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="email@email.com"
                                    className="form-control mt-2"
                                    maxLength='30'
                                    onBlur={handleOnBlur}
                                />
                                <p className='register-required-field'>{registerErrors.email}</p>
                            </div>
                            <div>
                                <label className='register-password'>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese una contraseña segura"
                                    className="form-control mt-2"
                                    maxLength='30'
                                    minLength='8'
                                    onBlur={handleOnBlur}
                                />
                                <p className='register-required-field'>{registerErrors.password}</p>
                            </div>
                            <div>
                                <label className='register-confirm-password'>Confirme su contraseña</label>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    value={passwordConfirm}
                                    onChange={handleOnChange}
                                    placeholder="Repita la contraseña ingresada anteriormente"
                                    className="form-control mt-2"
                                    maxLength='30'
                                    minLength='8'
                                    onBlur={handleOnBlur}
                                />
                                <p className='register-required-field'>{registerErrors.passwordConfirm}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/forgotPassword' className='forgot-link'> ¿Olvido su contraseña? </Link>
                                <button 
                                    disabled={Object.values(form).some((value) => value === "")}
                                    type="submit" 
                                    className='form-submit-button'
                                >Enviar</button>

                        </div>
                    </section>
            </div>
            </form>
        </div>
        </>
    );
};

export default Register;