import React from 'react';
import { Table } from 'react-bootstrap';

const ProdListGrid = ({ products }) => {
    return (
        <>
            <Table bordered hover className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.descrip}</td>
                                <td>${product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ProdListGrid;