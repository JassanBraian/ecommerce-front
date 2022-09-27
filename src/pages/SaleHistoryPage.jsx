import React from 'react';
import SaleList from '../components/entities/sale/base/SaleList';
import '../css/entities/sale/sale.css';
import adidasImg from '../assets/img/adidas.png'

const SaleHistoryPage = () => {
    return (
        <>
            <div className='app'>
                <div className="row d-flex align-items-end">
                    <div className="col-6">
                        <h2>Historial de compras realizadas</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src={adidasImg} className='logoAdidas' />
                    </div>
                </div>
                <SaleList />

            </div>
        </>
    );
};

export default SaleHistoryPage;