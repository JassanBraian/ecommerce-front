import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../auth/AuthContext"

const PrivateRoute = ({children}) => {
    const {isAuth, loading, getUser, token} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if(!isAuth && token) {
        getUser()
      }
    }, [])

    

    useEffect(() => {
        if(!isAuth) {  /* Si el usuario no esta autenticado, entonces sera redirigido a login. Esta ruta sirve para envolver a las rutas privadas como ser userMenu */
            navigate('/login');
        }
    }, [isAuth])

    if (loading) return <p>Cargando...</p>

  return children
}

export default PrivateRoute