import React, { useContext } from 'react';
import { authCntext } from '../AuthContex/AuthContex';
import { Navigate } from 'react-router-dom';

const PriveteRouter = ({ children }) => {
    const {user} = useContext(authCntext)
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PriveteRouter;