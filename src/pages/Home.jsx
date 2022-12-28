import React, { useContext } from 'react';
import '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Category from './Category';
import BootstrapCarousel from '../components/common/heroslider/BootstrapCarousel';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/common/spinner/Spinner';
import CategoryButtons from '../components/common/categoryButtons/CategoryButtons';
import FavoriteList from '../components/entities/favorites/FavoriteList';
import clientAxios from '../config/axios';
import PublicationContext from '../context/publication/PublicationContext';
import CategoriesContext from '../context/categories/CategoriesContext';
import publicidad from '../assets/img/publicidadd.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import remeraDeportiva from '../assets/img/remeras.jpg'
import remeraDeportivaDestac from '../assets/img/remera-deportiva-destac.jpg'



const Home = () => {
    
    const {getCategories, getHighlightedPosts} = useContext(CategoriesContext);
    const[categories, setCategories] = useState([]);
   

    useEffect(() => {
        async function doGetCategories(){
            const categories = await getCategories();
            setCategories(categories)
        }
        doGetCategories()
    }, [])   


    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    const goToCategory = (categoryId) => {
        navigate(`/category/${categoryId}`)
    };


    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    if (loading) {
        return <Spinner />
    }
    return (
        <>
            <div>
                <BootstrapCarousel />
                <h1 className='text-center mt-4'>Destacados</h1>
                <section>
                    <div className='card-slider-container container-fluid'>
                        <Slider {...settings}>
                            <div className='cardd'>
                                <Link to={'/'} className='text-decoration-none text-black'>
                                    <div>
                                        <div className='cardd-top'>
                                            <img src={remeraDeportivaDestac} alt="" />
                                            <h2>Remera deportiva mujer</h2>
                                        </div>
                                        <div className='cardd-bottom'>
                                            <p>$5.500,99</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                            <div className='cardd'>
                                <div className='cardd-top'>
                                    <img src={remeraDeportivaDestac} alt="" />
                                    <h2>Remera deportiva mujer</h2>
                                </div>
                                <div className='cardd-bottom'>
                                    <p>$5.500,99</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
{/*                 {categories.map((category, index) => {
                    return (
                        <section>
                            <Category key={category} title={category.title} posts={category.posts} />
                            <button onClick={() => goToCategory(category.id)} className='seeMoreButton'>
                                <FontAwesomeIcon icon={faCirclePlus} />
                                Ver todos
                            </button>
                        </section>
                    )
                })} */}
                <CategoryButtons />
                <div>
                    <img src={publicidad} alt="Responsive image" className="publicity-image img-fluid" />
                </div>
            </div>
            
        </>
    );
};

export default Home;
