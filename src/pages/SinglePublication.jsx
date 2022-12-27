import { useState, useRef, useContext, useEffect } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import CommentList from "../components/entities/publication/SinglePage/CommentList";
import PublicationContext from "../context/publication/PublicationContext";
import { getDownloadURL, ref, listAll } from '@firebase/storage';
import {storage} from '../firebase/FireBaseConfig'
import Spinner from "../components/common/spinner/Spinner";
import FavoriteContext from "../context/favorites/FavoriteContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";



export default function SinglePublication(props) {
  const {id} = useParams()
  const { publication, getPublication } = useContext(PublicationContext);
  const [images3, setImages3] = useState([])
  const [loading, setLoading] = useState(false);

  const initialValues = {
    _id: 0,
    title: "",
    photos: [{ url: "", position: 0 }],
    ubication: "",
    description: "",
    category: "", /* condition */
  }
  const [publiData, setPubliData] = useState(initialValues);
  const { title, photos, ubication, description, category } = publiData;
  const [currentImg, setCurrentImg] = useState(images3[0]);
  const {addToFavorites, removeFromFavorites, isFavorite} = useContext(FavoriteContext);

  const myRef = useRef();

  //---------------------------Favourites

  const onToggleFavorite = ()=>{
    if(isFavorite(1234, props.postId)){
      removeFromFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    } else{
      addToFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    }
  };

  //--------------------------------------------------

  //---------------------------Single Publication Photos

  const getImages = async (id) => {
    try {
      setLoading(true)
      const imagesRef = ref(storage, `publications/${id}`);
     const response = await listAll(imagesRef)
     const res = []
         for(let item of response.items){
           const url = await getDownloadURL(item);
/*            console.log(url); */
           res.push(url)
         }
         setImages3(res)
         setCurrentImg(res[0])
         setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

//-----------------------------------------------------------
  
useEffect(() => {
    getPublication(id);
    getImages(id);
  }, []);

  useEffect(() => {
    setPubliData(publication);
  }, [publication]);

  if(loading){
    return <Spinner />
  }


  return (
    <>
      <section className="featured" id="featured">            
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 image-container">
            <div className="small-image" ref={myRef}>
              {images3.map((item, index) => (
                <img
                  src={item} 
                  alt="" 
                  className="featured-image-1"
                  key={index}
                  onClick={() => setCurrentImg(item)}
                />
              ))}
            </div>
            <div className="big-image">
                <img src={currentImg} alt="" className="big-image-1"/>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-6 content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="price">{category}</div>
            <div className="quota">{ubication}</div>
              <a href="#" className="btn">add to cart</a>
          </div>
        </div>
      </section>


      <div>
        <CommentList /> {/* Paso el id para que solo los usuarios que esten conectados puedan dejar un comentario. El id provendria desde el backend desde .windows o API req . En este caso paso el currentUserId estadico para ser comparado con el userId del comentario*/}
      </div>


{/*{!isFavorite(1234, props.postId) ? 
  <button className="favouriteButton fav-single-pub-btn" onClick={onToggleFavorite}>
    <FontAwesomeIcon icon={faStar} />
      Marcar como favorito
  </button>
  :
  <button className="submit-button" onClick={onToggleFavorite}>
    <FontAwesomeIcon icon={faTrashCan} />
      Eliminar de mis favoritos
  </button>}
*/}
    </>
  )
}
