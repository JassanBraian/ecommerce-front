import SaleCard from "../card/SaleCard";

const SaleList = () => {

    const sales = [
        {
            products: [
                {
                    descrip: "Zapatillas Forum Mid",
                    price: 42000
                },
                {
                    descrip: "Shorts Aeroready 2",
                    price: 8500
                },
                {
                    descrip: "Zapatillas Duramo SL",
                    price: 19000
                }
            ],
            dateSale: "10-08-2022"
        },
        {
            products: [
                {
                    descrip: "Buzo Essentials Logo",
                    price: 18000
                },
                {
                    descrip: "Zapatillas Superstar",
                    price: 32000
                },
                {
                    descrip: "Remera Essentials Logo",
                    price: 6500
                }
            ],
            dateSale: "11-05-2022"
        }
    ];

    return (
        <>
            {
                sales.map((sale, index) => (
                    <SaleCard sale={sale} key={index} />
                ))
            }

        </>
    );
};

export default SaleList;