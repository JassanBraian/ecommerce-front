import React from 'react'
import { useNavigate } from 'react-router';
import '../../../css/common/categoryButtons/categoryButtons.css'
import remeras from '../../../assets/img/remeras.jpg'
import shorts from '../../../assets/img/shorts.jpg'
import calzas from '../../../assets/img/calzas.jpg'
import pantalones from '../../../assets/img/pantalones.jpg'
import accesorios from '../../../assets/img/accesorios.jpg'
import conjuntos from '../../../assets/img/conjuntos.jpg'


const CategoryButtons = () => {
    const navigate = useNavigate();
    const goToCategory = (categoryId)=>{
      navigate(`/category/${categoryId}`)
    };
  return (
    <div className='cardContainer container-fluid row'>
        {/* <button onClick={() => goToCategory('up for adoption')} className='categoryButton col-lg-3  col-sm-12'>
            <FontAwesomeIcon icon={faDog} size="5x"/>
            <div className='button-title'>En Adopción</div>  
        </button> */}
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={remeras} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Remeras</span>
            </div>
          </a>
        </div>
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={shorts} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Shorts</span>
            </div>
          </a>
        </div>
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={calzas} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Calzas</span>
            </div>
          </a>
        </div>
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={pantalones} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Pantalones</span>
            </div>
          </a>
        </div>
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={accesorios} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Accesorios</span>
            </div>
          </a>
        </div>
        <div className='category-card col-md-6 col-lg-4 col-sm-12'>
          <a onClick={() => goToCategory('up for adoption')} className='card-link'>
            <img src={conjuntos} alt="" className='card-img'/>
            <div className='card-link-name'>
              <span className='card-title'>Conjuntos</span>
            </div>
          </a>
        </div>
    </div>
  )
}

export default CategoryButtons