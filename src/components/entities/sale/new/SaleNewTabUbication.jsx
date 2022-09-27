import { ButtonGroup, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';

const SaleNewTabUbication = ({ setTabActive }) => {

    const initialValue = {
        country: '',
        city: '',
        postalcode: '',
        street: '',
        door: ''
    }
    const [formTabUbi, setFormTabUbi] = useState(initialValue);
    const { country, city, postalcode, street, door } = formTabUbi;

    const [error, setError] = useState([]);

    const handleOnChange = e => {
        setFormTabUbi({
            ...formTabUbi,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (country && city && postalcode && street && door) {
            setTabActive('payment');
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: 'Falta completar algún campo'
            });
        }
    }

    return (
        <>
            <Form className='formCreate'>
                <h2>Datos de Ubicacion</h2>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control
                        name="country"
                        type="text"
                        placeholder="Su pais"
                        value={country}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                        name="city"
                        type="text"
                        placeholder="Su ciudad"
                        value={city}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control
                        name="postalcode"
                        type="text"
                        placeholder="Su codigo postal"
                        value={postalcode}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                        name="street"
                        type="text"
                        placeholder="Su calle"
                        value={street}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Puerta</Form.Label>
                    <Form.Control
                        name="door"
                        type="text"
                        placeholder="Su numero de puerta"
                        value={door}
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
                        onClick={handleOnSubmit}
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

export default SaleNewTabUbication;