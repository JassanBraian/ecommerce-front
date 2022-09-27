import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SaleNewTabUbication from '../components/entities/sale/new/SaleNewTabUbication';
import SaleNewTabPayment from '../components/entities/sale/new/SaleNewTabPayment';
import '../css/entities/sale/sale.css';
import SaleNewTabConfirm from '../components/entities/sale/new/SaleNewTabConfirm';

const SaleNewPage = () => {

    const [tabActive, setTabActive] = useState('ubication');

    return (
        <>
            <div className='app'>

                <Tabs
                    id="new-sale-tabs"
                    activeKey={tabActive}
                    onSelect={(tab) => setTabActive(tab)}
                    className="mb-3"
                >
                    <Tab eventKey="ubication" title="Parte 1">
                        <SaleNewTabUbication setTabActive={setTabActive} />
                    </Tab>
                    <Tab eventKey="payment" title="Parte 2">
                        <SaleNewTabPayment />
                    </Tab>
                    <Tab eventKey="confirmation" title="Parte 3">
                        <SaleNewTabConfirm />
                    </Tab>
                </Tabs>
            </div>


        </>
    );
};

export default SaleNewPage;