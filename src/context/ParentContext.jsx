import React from 'react';
import AuthState from './auth/AuthState';
import SaleProvider from './sale/SaleProvider';

const ParentContext = ({ children }) => {
    return (
        <AuthState>
            <SaleProvider>
                {children}
            </SaleProvider>
        </AuthState>
    );
};

export default ParentContext;