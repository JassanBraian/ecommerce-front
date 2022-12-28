import React from 'react';
import { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PublicationContext from '../../../../context/publication/PublicationContext';

const ModDeletePublication = ({ show, onHide }) => {

  const { deletePublication, publication } = useContext(PublicationContext);

  const handleSubmit = e =>{
    e.preventDefault();
    deletePublication(publication._id);
    onHide();
  }

  return (
      <Modal 
      show={show}  
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Form onSubmit={handleSubmit} >
          {<Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>}

          <Modal.Body>
            <p>¿Seguro que desea eliminar esta publicación?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cerrar</Button>
            <Button variant="primary" type='submit'>Eliminar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
  )
}

export default ModDeletePublication