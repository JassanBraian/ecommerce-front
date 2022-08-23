import {
    GET_SALE,
    GET_SALES,
    GET_SALES_USER,
    CREATE_SALE,
    UPDATE_SALE
} from "../../types/sale";

const SaleReducer = (state, action) => {
    switch (action.type) {
        case GET_SALES:
            return {
                ...state,
                sales: action.payload,
            }
        case GET_SALES_USER:
            return {
                ...state,
                sales: action.payload,
            }
        case GET_SALE:
            return {
                ...state,
                sale: action.payload,
            }
        case CREATE_SALE:
            return {
                ...state,
                sales: [...state.sales, action.payload],
            }
        case UPDATE_SALE:
            return {
                ...state,
                sales: state.sales.map(sale =>
                    sale._id === action.payload._id ? action.payload : sale),
            }
        default:
            return state;
    }
}

export default SaleReducer;