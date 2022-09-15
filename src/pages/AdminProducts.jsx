import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddProductModal from '../components/entities/products/Modals/AddProductModal';
import DeleteProductModal from '../components/entities/products/Modals/DeleteProductModal';
import EditProductModal from '../components/entities/products/Modals/EditProductModal';
import ProductsList from '../components/entities/products/ProductsList';
import ProductsContext from '../context/products/ProductsContext';
import '../css/entities/products/AdminProducts.css';

const AdminProducts = () => {

  const [ showAddProductModal, setShowAddProductModal ] = useState(false);
  const [ showEditProductModal, setShowEditProductModal ] = useState(false);
  const [ showDeleteProductModal, setShowDeleteProductModal ] = useState(false);
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(()=>{
    getProducts();
  }, []);

  const openEditModal = () =>{
    setShowEditProductModal(true);
  };

  const openDeleteModal = () =>{
    setShowDeleteProductModal(true);
  };

  return (
    <>
    <div className='admin-products-container'>
      <h1>Productos</h1>
      <Button 
        variant='primary' 
        className='admin-products-add-btn'
        onClick={()=> setShowAddProductModal(true)}>Añadir Producto</Button>
      <Table striped bordered hover className='admin-products-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Tiene oferta</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
          <ProductsList
          key={index}
          data={product}
          index={index + 1}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
           />
          ))}
        </tbody>
      </Table>
      <div className='admin-products-table-footer'>
        <p>Último artículo agregado:</p>
        <p>Fecha del último agregado:</p>
      </div>
    </div>
    
    <AddProductModal 
      show={showAddProductModal}
      onHide={() => setShowAddProductModal(false)} />
    
    <EditProductModal
      show={showEditProductModal}
      onHide={()=> setShowEditProductModal(false)} />

    <DeleteProductModal 
      show={showDeleteProductModal}
      onHide={()=> setShowDeleteProductModal(false)} />
    
    </>

  )
}

export default AdminProducts