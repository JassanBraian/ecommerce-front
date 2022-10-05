import {
    GET_SALE,
    GET_SALES,
    GET_SALES_USER,
    CREATE_SALE,
    UPDATE_SALE,
    UPDATE_SALE_NEW,
    GET_SALE_UNPAID_USER
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
        case UPDATE_SALE_NEW:
            return {
                ...state,
                salenew: action.payload,
            }
        case GET_SALE_UNPAID_USER:
            return {
                ...state,
                saleunpaid: action.payload,
            }
        default:
            return state;
    }
}

export default SaleReducer;