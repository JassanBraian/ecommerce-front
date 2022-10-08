import { useEffect, useContext } from "react";
import SaleCard from "../card/SaleCard";
import SaleContext from "../../../../context/sale/SaleContext";

const SaleList = () => {
    const { getSales, sales } = useContext(SaleContext);

    useEffect(() => {
        getSales();
    }, [])

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