import React from 'react';
import CommentProvider from './comment/CommentProvider';
import AuthState from './auth/AuthState';
import UserProvider from './user/UserProvider';
import PublicationProvider from './publication/PublicationProvider';
import FavoriteProvider from './favorites/FavoriteProvider';
import CategoriesProvider from './categories/CategoriesProvider';
import SaleProvider from './sale/SaleProvider';
import ProductsProvider from "./products/ProductsProvider";
import UsersProvider from "./users/UsersProvider";

const ParentContext = ({ children }) => {
    return (
        <CommentProvider>
            <UserProvider>
            <PublicationProvider>
            <FavoriteProvider>
            <CategoriesProvider>
            <AuthState>
                <ProductsProvider>
                <UsersProvider>
                <SaleProvider>
                    {children}
                </SaleProvider>
                </UsersProvider>
                </ProductsProvider>
            </AuthState>
            </CategoriesProvider>
            </FavoriteProvider>
            </PublicationProvider>
            </UserProvider>
        </CommentProvider>
    );
};

export default ParentContext;