import ProductsProvider from "./products/ProductsProvider";

const ParentContext = ({ children }) => {
    return (
    <ProductsProvider>
        { children }
    </ProductsProvider>
    );
};

export default ParentContext;