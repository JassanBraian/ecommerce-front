import { useReducer } from "react";
import FavoriteReducer from "./FavoriteReducer";
import FavoriteContext from "./FavoriteContext";
import { useEffect } from "react";
import clientAxios from "../../config/axios";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES} from "../../types/favorites/index"




const FavoriteProvider = ({children}) => {

    useEffect(() => {
        getFavorites();
    }, [])

    const initialState ={
        favorites: [
            {
                id: 1,
                postId:1,
                userId: 2
            },
            {
                id: 2,
                postId:1,
                userId: 2
            },
            {
                id: 3,
                postId:2,
                userId: 2
            },
            {
                id: 4,
                postId:3,
                userId: 2
            },
            {
                id: 5,
                postId:4,
                userId: 3
            }
        ]
    } ;

   const [state, dispatch] = useReducer(FavoriteReducer, initialState);

   const API_URL = 'http://localhost:5000/favorites';
//    const [loading, setLoading] = useState(false);

//    const getPublications = async () =>{
//        setLoading(true)
//        const response = await fetch(API_URL);
//        const data = await response.json();
//        setPublications(data);
//        setLoading(false)
//    };

   const getFavorites = async (userId) => {
       try {
           const res = await clientAxios.get(`http://localhost:4000/api/v1/favourite`);
           res && dispatch({ type: SET_FAVORITES, payload: res.data.favourites });
        } catch (error) {
            throw error
        }
    }
    // useEffect(()=>{
    //     getFavorites();
    // }, []);

    
   const addToFavorites = async (postId)=>{
    //    return dispatch({type: ADD_TO_FAVORITES, payload: postId});
        try{
            const res = await clientAxios.post(`http://localhost:4000/api/v1/favourite/${postId}`);
            res && dispatch({type: ADD_TO_FAVORITES, payload: res.data.favorite});
        } catch (error) {
            dispatch({type: REMOVE_FROM_FAVORITES, payload: postId})
        }
}

   const removeFromFavorites =  async (postId) => {
    //    return dispatch({type: REMOVE_FROM_FAVORITES, payload: postId});
       try {
        const res = await clientAxios.delete(`http://localhost:4000/api/v1/favourite/${postId}`);
        res && dispatch({ type: REMOVE_FROM_FAVORITES, payload: postId});
    } catch (error) {
        throw error;
    }
}
   
   const isFavorite = (userId, postId) => {
    return state.favorites.indexOf(postId) >= 0;
   };
   

  return (
    <FavoriteContext.Provider value={{
        ...state,
        getFavorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        
    }}>
        {children}
    </FavoriteContext.Provider>
  )
}


export default FavoriteProvider