import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ProductsContext from '../../../context/products/ProductsContext';
import '../../../css/entities/products/ProductsList.css';

const ProductsList = ({ data, index, openEditModal }) => {

  const { getProduct } = useContext(ProductsContext);

  return (<>
    <tr>
      <td> {index} </td>
      <td> {data.name} </td>
      <td> {data.brand} </td>
      <td> {'$' + data.price} </td>
      <td> {data.stock} </td>
      <td> {data.isInOffer ? 'Si' : 'No'} </td>
      <td> {data.category} </td>
      <td className='actions-column'>
        <Button 
          variant='info' 
          onClick={()=>{
            getProduct(data._id);
            openEditModal();
          }}>Editar</Button>
        <Button 
          variant='danger'
          onClick={()=>{
            getProduct(data._id);
          }}>Eliminar</Button>
      </td>
    </tr>
  </>
  )
}

export default ProductsList