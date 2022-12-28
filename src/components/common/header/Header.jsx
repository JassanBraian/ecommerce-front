import { useState, useEffect, useContext } from "react";
import logoExample from "../../../assets/img/sport-s.png";
import '../../../css/common/header/header.css';
import { Link, useNavigate } from "react-router-dom";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Hamburger from "./hamburger/Hamburger";
import SearchBar from "./searchbar/SearchBar";
import AuthContext from "../../../context/auth/AuthContext";
import FavoriteList from "../../entities/favorites/FavoriteList";
import Swal from "sweetalert2";
import brandName from '../../../assets/img/sportsBlackBrand.png'
// import { profile } from "console";




const Header = () => {  
  //   show login signup and profile 
  const navigate = useNavigate();
  const { logout, isAuth, getUser } = useContext(AuthContext);
  const [showLogin, setIsShowLogin] = useState(!isAuth);

  const loginButtonHandler = () => {
    setIsShowLogin(true)
    logout()
    const swaltCustomButton = Swal.mixin({
      customClass: {
        confirmButton: 'submit-button',
      },
      buttonsStyling: false
    })
    swaltCustomButton.fire({
      title: 'Sesion cerrada con exito',
      showDenyButton: false,
      confirmButtonText: 'OK',
    })
    navigate ('/')
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSideBar = () => {
    setSidebar(false);
  }

  useEffect(() => {
    setIsShowLogin(!isAuth)
  }, [isAuth])

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>

<header class="section-header">
    <section class="header-main border-bottom">
        <div class="container-fluid">
            <div class="row d-flex align-items-center ">
              {/* ICONO IZQUIERDA */}
                <div class="col-lg-3 col-xl-3 col-sm-4 col-md-3 col-4">
                  {sidebar && <Hamburger cancel={closeSideBar} />}
                    <img src={logoExample} alt="logo" className="header-icon text-white" onClick={showSidebar} /> 
                </div>
              {/* BARRA DE BUSQUEDA */}
                <div class="col-lg-3 col-xl-3 col-sm-3 col-md-3 d-none d-md-block">
                  <form action="#" class="search-wrap">
                    <div class="input-group w-100"> 
                      <SearchBar class="form-control search-form" />
                    </div>
                  </form>
                </div>

                  {showLogin &&
                    <>
                      {/* ICONO CARRITO */}
                      <div class="col-lg-3 col-xl-3 col-sm-4 col-md-3 col-2 d-flex justify-content-center">
                        <FavoriteList /> 
                          <span class="vl"></span>                        
                          <span class="vl"></span>
                      </div>
                      {/* LOGIN - REGISTER */}
                      <div className="col-lg-3 col-xl-3 col-sm-4 col-md-3 col-6 d-flex align-items-center justify-content-around login-register">
                          <Link class="nav-link nav-user-img" to={"/register"}>
                          <span class="register">CREAR CUENTA</span>
                          </Link>
                          <Link class="nav-link nav-user-img" to={"/login"}>              
                              <span class="login">INICIAR SESIÓN</span>
                          </Link>
                      </div>
                  </>
                }
                {
                !showLogin &&
                    <>
                        {/* ICONO CARRITO */}
                        <div class="col-lg-3 col-xl-3 col-sm-2 col-md-3 col-4 d-flex justify-content-center login-register">
                          <FavoriteList /> 
                            <span class="vl"></span>                        
                            <span class="vl"></span>
                        </div>
                        {/* USER CONNECTED */}
                        <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3 col-4 d-flex justify-content-end">
                          <Profile loginButtonHandler={loginButtonHandler} />
                        </div>
                    </>
                }

            </div>
        </div>
    </section>
    <div className="d-flex justify-content-center mt-3">
      <Link to={'/'}>
        <img src={brandName} alt="" className="img-fluid brandImageName" />
      </Link>
    </div>
    <hr className="d-none d-sm-block d-sm-none d-md-block mt-3 mb-1"/>
    <nav class="navbar navbar-expand-md navbar-main border-bottom mt-0">
        <div class="container-fluid">
            <form class="d-md-none my-2">
                <div class="input-group">
                  <SearchBar class="form-control responsive-search"/>
                </div>
            
            </form> <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown6" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>

            <div class="navbar-collapse collapse" id="dropdown6">
                <ul class="container-fluid navbar-nav mr-auto d-flex justify-content-between"> 
                <h3 className="d-md-none d-lg-none d-xl-none">Categorias</h3>
                <hr className="d-md-none d-lg-none d-xl-none"/>
                  <li class="nav-item">
                    <Link className="nav-link item text-decoration-none" to={"/login"}>
                      <p className="font-weight-bold">Remeras</p>
                    </Link> 
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link item text-decoration-none" to={"/register"}>          
                      <p>Shorts</p>
                    </Link> 
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link item text-decoration-none" to={"/login"}>
                      <p>Calzas</p>
                    </Link> 
                  </li>
                  <li class="nav-item"> 
                    <Link className="nav-link item text-decoration-none" to={"/register"}>
                      <p>Pantalones</p>
                    </Link>
                  </li>
                  <li class="nav-item"> 
                    <Link className="nav-link item text-decoration-none" to={"/login"}>
                      <p>Accesorios</p>
                    </Link> 
                  </li>
                  <li class="nav-item"> 
                    <Link className="nav-link item text-decoration-none" to={"/register"}>
                      <p>Conjuntos</p>
                    </Link>
                  </li>
                  <li class="nav-item"> 
                    <Link className="nav-link item-sale text-decoration-none" to={"/register"}>
                      <p className="sale">SALE</p>
                    </Link>
                  </li>          
                </ul>

            </div>
        </div>
    </nav>
</header>
{/* <div className="pt-3 position-top d-flex align-items-center">
  {sidebar && <Hamburger cancel={closeSideBar} />}
    <button className="button" onClick={showSidebar}>
      <span>Menu</span>
    </button>
</div>
<div class="arrow">
  <div class="arrow-top"></div>
  <div class="arrow-bottom"></div>
</div> */}


</>
  );
};

export default Header;
