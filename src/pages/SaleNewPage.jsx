import { useState, useContext, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SaleNewTabUbication from '../components/entities/sale/new/SaleNewTabUbication';
import SaleNewTabPayment from '../components/entities/sale/new/SaleNewTabPayment';
import '../css/entities/sale/sale.css';
import SaleNewTabConfirm from '../components/entities/sale/new/SaleNewTabConfirm';
import SaleCard from '../components/entities/sale/card/SaleCard';
import SaleContext from '../context/sale/SaleContext';

const SaleNewPage = () => {

    const { getSale, sale } = useContext(SaleContext);

    const [tabActive, setTabActive] = useState('ubication');

    useEffect(() => {
        getSale("631d3a383684ee1326d4955b");    // falta trabajar con la venta no pagada del usuario logueado
    }, []);
    
    return (
        <>
            <div className='app'>

                <SaleCard sale={ sale } />

                <Tabs
                    id="new-sale-tabs"
                    activeKey={tabActive}
                    // onSelect={(tab) => setTabActive(tab)}
                    className="mb-3"
                >
                    <Tab eventKey="ubication" title="Ubicación">
                        <SaleNewTabUbication setTabActive={setTabActive} />
                    </Tab>
                    <Tab eventKey="payment" title="Datos de Pago">
                        <SaleNewTabPayment />
                    </Tab>
                    <Tab eventKey="confirmation" title="Confimación">
                        <SaleNewTabConfirm />
                    </Tab>
                </Tabs>
            </div>


        </>
    );
};

export default SaleNewPage;