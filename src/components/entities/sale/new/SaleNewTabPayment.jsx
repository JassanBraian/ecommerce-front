import { ButtonGroup, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const SaleNewTabPayment = () => {

    const initialState = {
        cardnumber: "",
        cardowner: "",
        expirdate: "",
        segurcode: ""
    }
    const { cardnumber, cardowner, expirdate, segurcode } = initialState;

    const [tabPayment, setTabPayment] = useState(initialState);

    const [error, setError] = useState([]);

    const handleOnChange = e => {
        setTabPayment({
            ...tabPayment,
            [e.target.name]: e.target.value
        })
    }

    const handleOnCancel = e => {
        e.preventDefault();

        // swal de confirmar cancelacion e ir a menu inicio   
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        //redireccionar a confirmar compra    
    }

    return (
        <>
            <Form className='formCreate'>
                <h2>Datos de Pago</h2>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Numero de tarjeta</Form.Label>
                    <Form.Control
                        name="cardnumber"
                        type="text"
                        placeholder="Numero de tarjeta"
                        value={cardnumber}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del titular</Form.Label>
                    <Form.Control
                        name="cardowner"
                        type="text"
                        placeholder="Nombre del titular"
                        value={cardowner}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha de expiración</Form.Label>
                    <Form.Control
                        name="expirdate"
                        type="text"
                        placeholder="Fecha de expiración"
                        value={expirdate}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Codigo de seguridad</Form.Label>
                    <Form.Control
                        name="segurcode"
                        type="text"
                        placeholder="Codigo de seguridad"
                        value={segurcode}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>asd</Form.Label>
                    <Form.Select
                        name="category"
                        value={category}
                        onChange={handleOnChange}
                    >
                        <option value={'missing'}>Missing</option>
                        <option value={'found'}>Found</option>
                        <option value={'up for adoption'}>Up for adoption</option>
                    </Form.Select>
                </Form.Group> */}
                <div>
                    {
                        error && (<p className='errorMsg'>{error}</p>)
                    }
                </div>
                <ButtonGroup className='d-flex justify-content-center'>
                    <Button
                        variant='danger'
                        className='btnSave'
                        onClick={handleOnCancel}
                    >Cancelar
                    </Button>
                    <Button
                        variant='success'
                        className='btnSave'
                        onClick={handleOnSubmit}
                    >Siguiente
                    </Button>
                </ButtonGroup>
            </Form>
        </>
    );
};

export default SaleNewTabPayment;