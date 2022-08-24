import Card from 'react-bootstrap/Card';
import ProdListGrid from '../../product/card/ProdListGrid';


const SaleCard = ({ sale }) => {
    
    let totalPrice = 0;
    sale.products.forEach(p => {
        totalPrice += p.price;
    });

    return (
        <>
            <Card className='saleCard'>
                <Card.Header className='headerCard'>Fecha de compra: {sale.dateSale}</Card.Header>
                <Card.Body className='bodyCard'>
                    <Card.Title className='titleCard'>Lista de productos selecionados:</Card.Title>
                    <ProdListGrid products={sale.products}/>
                    <Card.Text className='text-center text-success textCard'>Total: ${totalPrice}</Card.Text>
                </Card.Body>
                <Card.Footer className="footerCard">7 days ago</Card.Footer>
            </Card>
        </>
    );
};

export default SaleCard;