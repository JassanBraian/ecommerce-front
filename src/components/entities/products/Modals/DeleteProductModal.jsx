import { React, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import ProductsContext from "../../../../context/products/ProductsContext";
import "../../../../css/entities/Modals/DeleteProductModal.css";

const DeleteProductModal = ({ show, onHide }) => {
  const { deleteProduct, currentProduct } = useContext(ProductsContext);

  const confirmDeleteProduct = () => {
    deleteProduct(currentProduct._id);
    onHide();
  };

  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="delete-product-modal"
    >
      <Modal.Header className="delete-product-modal-header">
        <Modal.Title className="delete-product-modal-title">
          ¿Estás seguro que deseas eliminar este producto?
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Se borrará permanentemente</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={confirmDeleteProduct}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProductModal;
