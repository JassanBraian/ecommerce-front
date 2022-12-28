import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import clientAxios from '../config/axios';

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = form;

    const [loginErrors, setLoginErrors] = useState({});
    const [errorLogin, setErrorLogin] = useState(null)

    const handleOnChange = (e) => {
        setErrorLogin(null)
        setForm({ ...form, [e.target.name]: e.target.value });
    } 

    const emailValidation = input => {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(input.value) ? true : false;
    }


    const handleOnSubmit = e => {
        e.preventDefault();
        login(form);
    }

    const handleOnBlur = (e) => {
        if (e.target.value === "") {
            setLoginErrors({
            ...loginErrors,
            [e.target.name]: "Campo obligatorio"
          });
        } else if (e.target.name === "email" && !emailValidation(e.target)) {
            setLoginErrors({
                ...loginErrors,
                [e.target.name] : `Email no válido`
              });
        } else {
            setLoginErrors({
            ...loginErrors,
            [e.target.name]: ``,
          });
    
        }
    
      };

    useEffect(() => {
        if (isAuth) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio de sesion exitoso',
                showConfirmButton: false,
                timer: 1200
              })
            navigate('/')
        }
    }, [isAuth])




    return (
        <>
            {/* <div className='title'>Login</div> */}
            <div className='login-wrapper'>
                <form onSubmit={handleOnSubmit}>
                    <h1 className='text-center login-page'>INICIAR SESION</h1>
                    <div id="login-wizard">
                    
                    <section>
                        <div className="form-header">
                        <h2 className='text-center login-title mb-5'>Ingrese sus datos</h2>
                        </div>
                        <div className="form-group">                                 
                            <div>
                                <label className='email-login'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su email"
                                    className="form-control mt-2"
                                    onBlur={handleOnBlur}
                                    maxLength='30'
                                    minLength='8'
                                />
                                    
                                    <p className='login-required-field'>{loginErrors.email}</p>
                            </div>
                            <div>
                                <label className='password-login'>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su contraseña"
                                    className="form-control mt-2"
                                    minLength="8"
                                    maxLength='20'
                                    onBlur={handleOnBlur}
                                />
                                    <p className='login-required-field'>{loginErrors.password}</p>
                            </div>
                                    
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/register' className='login-forgot-link'> ¿No tiene cuenta? </Link>
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

export default Login;