import React from 'react';
import AuthState from './auth/AuthState';
import SaleProvider from './sale/SaleProvider';
import ProductsProvider from "./products/ProductsProvider";
import UsersProvider from "./users/UsersProvider";

const ParentContext = ({ children }) => {
    return (
        <AuthState>
            <ProductsProvider>
            <UsersProvider>
            <SaleProvider>
                {children}
            </SaleProvider>
            </UsersProvider>
            </ProductsProvider>
        </AuthState>
    );
};

export default ParentContext;