import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../../context/auth/AuthContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children}) => {

    const { isAuth, loading, getUser, token, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth && token) {
            getUser();
        }
    }, [])

    useEffect(() => {
        if (isAuth) {
            if (user && user.role !== 'admin') {
                navigate('/'); /* Para que vuelva a la pagina anterior automaticamente */
            }
        }
    }, [user]);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;