import { useContext, useEffect } from "react"
import AuthContext from "../auth/AuthContext"
import { useNavigate } from "react-router-dom"

const AdminRoute = ({children}) => {
    const {isAuth, loading, getUser, token, user} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)

    useEffect(() => {
      if(!isAuth && token) {
        getUser()
      }
    }, [])

    useEffect(() => {
        if(isAuth) {  
            if (user && user.role !== 'admin') {
                navigate(-1); /* Para que vuelva a la pagina anterior automaticamente */
            }
        }
    }, [user])

    if (loading) return <p>Cargando...</p>

  return children
}


export default AdminRoute