import { Button } from 'react-bootstrap';
import React from 'react';
import '../../../../css/entities/admin/AdminList.css';
import { useContext } from 'react';
import PublicationContext from '../../../../context/publication/PublicationContext';

const AdminListItem = ({ data, editModal, viewModal, deleteConfirmModal, index }) => {

  const { getPublication } = useContext(PublicationContext)

  return (
    <>
          <tr>
            <td>{index}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.ubication}</td>
            <td>{data.category}</td>
            <td>{data.user}</td>
            <td className='d-flex adminData'>
              <Button 
              variant='warning' 
              size='sm'
              onClick={()=>{
                getPublication(data._id);
                viewModal();
              }}
              >Open</Button>
              <Button 
              size='sm'
              onClick={()=> {
                getPublication(data._id)
                editModal();
                }}>Editar</Button>
              <Button 
              variant='danger' 
              size='sm'
              onClick={()=>{
                getPublication(data._id);
                deleteConfirmModal();
                }}>Eliminar</Button>
            </td>
          </tr>
    </>
  )
}

export default AdminListItem;