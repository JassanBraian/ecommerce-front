import React, { useState, useEffect, useContext } from 'react'
import "../css/common/SearchBar/SearchPage.css"
import { Link } from 'react-router-dom';
/* import Spinner from '../components/common/spinner/Spinner'; */
import PublicationContext from '../context/publication/PublicationContext';
import { getDownloadURL, ref, listAll } from '@firebase/storage';
import {storage} from '../firebase/FireBaseConfig'


const SearchPage = () => {
    const [images3, setImages3] = useState([])
    const [currentImg, setCurrentImg] = useState(images3[0]);
/*     const [loading, setLoading] = useState(false); */

    const {filteredData} = useContext(PublicationContext)
    
    
// CARDS IMAGES--------------------------------------------

const getImages = async (id) => {
    try {
/*      setLoading(true) */
     const imagesRef = ref(storage, `publications/${id}`);
     const response = await listAll(imagesRef)
     const img1 = await getDownloadURL(response.items[0])
//      const res = []
//          for(let item of response.items){
//            const url = await getDownloadURL(item);
// /*            console.log(url); */
//            res.push(url)
//          }
//          setImages3(res)
         setCurrentImg(img1)
/*          setLoading(false) */
    } catch (error) {
      console.log(error)
    }   
  };

  useEffect(() => {
  }, [filteredData])
  

    /* useEffect( async ()=>{
      await getImages()
    },[]) */
   /*  useEffect( ()=>{
        getImages()
      },[]) */
//--------------------------------------------

/*     if(loading){
        return <Spinner />
    } */

  return (
    <>
        <section className='container'>
            <div className='row justify-content-center'> 
                    
                    { 
                    filteredData.length != 0 ? 
                    filteredData.map((publication, index) => {
                    /*const currentImg = ref(storage, publication._id); */
                    /* getImages(publication._id) */
                    /* console.log(index) */
                            return (
                            <div className='col-11 col-md-6 col-lg-3 card m-3 p-0' key={index}>
                            <div>        
                                <img src="https://estaticos-cdn.prensaiberica.es/clip/1fa3b0c5-a0ba-46e4-a69a-7609feb0f9f7_16-9-aspect-ratio_default_0.jpg" className="card-img-top img-fluid" alt= '' />
                                <div className="card-body">
                                    <h1 className="card-title">{publication.title}</h1>  
                                    <p className="card-text">{publication.description}</p>
                                </div>
                            </div>
                            <Link to={`/single-publication/${publication._id}`} className="stretched-link"></Link>
                            </div>
                            );
                            })
                    :
                    <div>
                        <h2 className='text-center no-results'>No se encontraron resultados</h2>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" className='search-page-submit-button mb-5 mt-4'>
                            <Link to="/" className='text-decoration-none text-dark'>Volver a inicio</Link> 
                            </button>
                        </div>
                    </div>
                    }
                
            </div>
        </section>
    </>

  )
}

export default SearchPage