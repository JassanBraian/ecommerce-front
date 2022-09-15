import { useState } from 'react';
import ProductsContext from './ProductsContext';
import clientAxios from '../../config/axios';

const ProductsProvider = ({ children }) => {

  const initialValue = {
    products: [],
    currentProduct: {}
  };

  const [ values, setValues ] = useState(initialValue);

  const getProducts = async () =>{
    try {
      const res = await clientAxios.get('http://localhost:4000/api/v1/product');
      res && setValues({ ...values, products: res.data.products });
    } catch (error) {
      throw error;
    }
  };

  const getProduct = async productId => {
    try {
        const res = await clientAxios.get(`http://localhost:4000/api/v1/product/${productId}`);
        res && setValues({ ...values, currentProduct: res.data.currentProduct });
    } catch (error) {
        throw error;
    }
  }

  const addProduct = async product =>{
    try {
      const res = await clientAxios.post('http://localhost:4000/api/v1/product/', product);
      res && setValues({ ...values, products: res.data.currentProduct });
    } catch (error) {
      throw error;
    }
  };

  const updateProduct = async product => {
    try {
        const res = await clientAxios.put(`http://localhost:4000/api/v1/product/${product._id}`, product);
        res && await getProducts();
    } catch (error) {
        throw error;
    }
  };

  const deleteProduct = async productId => {
    try {
      const res = await clientAxios.delete(`http://localhost:4000/api/v1/product/${productId}`);
      res && await getProducts();
    } catch (error) {
      throw error;
    }
  };

  return (
    <ProductsContext.Provider value={{
      ...values,
      getProducts,
      getProduct,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider