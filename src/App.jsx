import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentContext from './context/ParentContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SearchPage from "./pages/SearchPage";
import UserMenu from './pages/UserMenu';
import SinglePublication from './pages/SinglePublication';
import ProfileImage from './pages/ProfileImage';
import Layout from './components/common/layout/Layout';
import UserPage from './pages/UserPage';
import PublicationsPage from './pages/PublicationsPage';
import PrivateRoute from './context/PrivatesRoutes/PrivateRoute';
import AdminRoute from './context/PrivatesRoutes/AdminRoute';
import PublicationNew from './pages/PublicationNew';
import authToken from './config/token';
import SaleHistoryPage from './pages/SaleHistoryPage';
import SaleNewPage from './pages/SaleNewPage';
import AdminProducts from './pages/AdminProducts';
import AdminUsers from './pages/AdminUsers';

const token = localStorage.getItem('token');

function App() {

  if (token) {
    authToken(token)
  }

  return (
    <>
      <ParentContext>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/comment' element={<CommentPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/resetPassword/:token" element={<ResetPassword/>}/> {/* resetPassword/:token */}
              <Route path="/search-page" element={<SearchPage/>}/>
              <Route path="/user-menu" element={
                <PrivateRoute>
                  <UserMenu/>
                </PrivateRoute>
              }/>
              <Route path='/profile-image'element={
                <PrivateRoute>

                  <ProfileImage/>
                </PrivateRoute>
              }/>
              <Route path="/single-publication/:id" element={

                <SinglePublication/>

              }/>         
              <Route path='/user' element={<UserPage />}/>
              <Route path='/publication' element={ <PublicationsPage /> }/>
              <Route path='/publication-new' element={<PublicationNew />} />
              <Route path='/category/:categoryId' element={<CategoryPage/>} title= 'Destacadas'/>
              <Route path='/sale-history' element={<SaleHistoryPage />} />
              <Route path='/sale-new' element={<SaleNewPage />} />
              <Route path='/admin-products' element={<AdminProducts />} />
              <Route path='/admin-users' element={<AdminUsers />} />
            </Routes>
          </Layout>
        </Router>
      </ParentContext>
    </>
  );
}

export default App;
