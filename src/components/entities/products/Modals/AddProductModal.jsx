import { useState } from "react";
import { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ProductsContext from "../../../../context/products/ProductsContext";
import "../../../../css/entities/Modals/AddProductModal.css";

const AddProductModal = ({ show, onHide }) => {
  const { addProduct } = useContext(ProductsContext);

  const initialFormValues = {
    name: "",
    brand: "",
    price: 0,
    stock: 0,
    isInOffer: false,
    category: "",
  };

  
  const [form, setForm] = useState(initialFormValues);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const { name, brand, price, stock, isInOffer, category } = form;
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || brand === "" || price === '' || stock === '' || price === 0 || stock === 0) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg(null);
    addProduct(form);
    onHide();
  };

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add-product-modal"
    >
      <Modal.Header className="add-product-modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar un producto
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="add-product-modal-body">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="name"
              placeholder="Nombre del producto"
              className="product-input"
              name="name"
              value={name}
              onChange={handleChange}
              onFocus={()=> setErrorMsg(null)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marca del producto"
              className="product-input"
              name="brand"
              value={brand}
              onChange={handleChange}
              onFocus={()=> setErrorMsg(null)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Precio del producto"
              className="product-input"
              name="price"
              value={price}
              onChange={handleChange}
              onFocus={()=> setErrorMsg(null)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Stock actual del producto"
              className="product-input"
              name="stock"
              value={stock}
              onChange={handleChange}
              onFocus={()=> setErrorMsg(null)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tiene oferta?</Form.Label>
            <Form.Select
              name="isInOffer"
              className="product-input-select"
              onChange={handleChange}
              value={isInOffer}
              onFocus={()=> setErrorMsg(null)}
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </Form.Select>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              className="product-input-select"
              onChange={handleChange}
              value={category}
              onFocus={()=> setErrorMsg(null)}
            >
              <option value={"Consolas"}>Consolas</option>
              <option value={"Audio y video"}>Audio y video</option>
            </Form.Select>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>
          <div>
            {errorMsg && (<p className="error-msg">{errorMsg}</p>)}
          </div>
        </Modal.Body>
        <Modal.Footer className="add-product-modal-footer">
          <Button variant="success" type="submit">
            Agregar producto
          </Button>
          <Button variant="danger" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
