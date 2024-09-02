import { useContext } from 'react';
import AuthContext from '../auth/authprovider';

const UseAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Error de contexto');
    }
    return context;
};

export default UseAuth;
