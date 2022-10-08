import { useReducer } from "react";
import SaleContext from './SaleContext';
import SaleReducer from './SaleReducer';
import clientAxios from '../../config/axios';
import {
    GET_SALE,
    GET_SALES,
    GET_SALES_USER,
    CREATE_SALE,
    UPDATE_SALE,
    UPDATE_SALE_NEW,
    GET_SALE_UNPAID_USER
} from '../../types/sale';

const SaleProvider = ({ children }) => {

    const initialState = {
        sales: [],
        sale: {},
        salenew: {},
        saleunpaid: {}
    }
    const [state, dispatch] = useReducer(SaleReducer, initialState);

    const getSales = async () => {
        try {
            const res = await clientAxios.get('http://localhost:4000/api/v1/sale');
            res && dispatch({ type: GET_SALES, payload: res.data.sales });
        } catch (error) {
            throw error;
        }
    }

    const getSalesByUserId = async userId => {
        try {
            const res = await clientAxios.get('http://localhost:4000/api/v1/sale/', { params: { userId: userId } });
            res && dispatch({ type: GET_SALES_USER, payload: res.data.sales });
        } catch (error) {
            throw error;
        }
    }

    const getSale = async saleId => {
        try {
            const res = await clientAxios.get(`http://localhost:4000/api/v1/sale/${saleId}`);
            res && dispatch({ type: GET_SALE, payload: res.data.sale });
        } catch (error) {
            throw error;
        }
    }

    const createSale = async sale => {
        try {
            const res = await clientAxios.post(`http://localhost:4000/api/v1/sale/`, sale);
            res && dispatch({ type: CREATE_SALE, payload: res.data.sale });
        } catch (error) {
            throw error;
        }
    }

    const updateSale = async sale => {
        try {
            const res = await clientAxios.put(`http://localhost:4000/api/v1/sale/${sale._id}`, sale);
            res && dispatch({ type: UPDATE_SALE, payload: res.data.sale });
        } catch (error) {
            throw error;
        }
    }

    const updateSaleNew = async salenew => {
        dispatch({ type: UPDATE_SALE_NEW, payload: salenew });
    }

    const getSaleUnpaidByUserId = async userId => {
        try {
            const res = await clientAxios.get('http://localhost:4000/api/v1/sale/', { params: { userId: userId } });
            res && dispatch({ type: GET_SALE_UNPAID_USER, payload: res.data.sale });
        } catch (error) {
            throw error;
        }
    }

    return (
        <SaleContext.Provider value={{
            ...state,
            getSales,
            getSalesByUserId,
            getSale,
            createSale,
            updateSale,
            updateSaleNew,
            getSaleUnpaidByUserId
        }}>
            {children}
        </SaleContext.Provider>
    );
};

export default SaleProvider;