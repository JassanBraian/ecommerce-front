import ProductsProvider from "./products/ProductsProvider";
import UsersProvider from "./users/UsersProvider";

const ParentContext = ({ children }) => {
    return (
    <UsersProvider>
    <ProductsProvider>
        { children }
    </ProductsProvider>
    </UsersProvider>
    );
};

export default ParentContext;