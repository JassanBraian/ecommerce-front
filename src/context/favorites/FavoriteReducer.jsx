import { ADD_TO_FAVORITES, 
    CLEAR_FAVORITES_LIST,
    REMOVE_FROM_FAVORITES, 
    SET_FAVORITES} from '../../types/favorites';

const FavoriteReducer = (state, action) =>{
switch (action.type) {
    case ADD_TO_FAVORITES:
        return {
          favorites:[...state.favorites, action.payload]
        }
    case REMOVE_FROM_FAVORITES: 
        return {
            favorites: state.favorites.filter(id => id !== action.payload)
        };
    case SET_FAVORITES:
        return { favorites: action.payload };
    default:
        return state;
}
}
export default FavoriteReducer;