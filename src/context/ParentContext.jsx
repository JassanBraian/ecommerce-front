import React from 'react';
import AuthState from './auth/AuthState';
import SaleProvider from './sale/SaleProvider';

const ParentContext = ({ children }) => {
    return (
        <AuthState>
            
                {children}
            
        </AuthState>
    );
};

export default ParentContext;