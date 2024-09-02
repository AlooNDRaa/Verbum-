import { createContext, useMemo, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';

interface User {
    email: string;
    id: number;
}

interface DecodedToken {
    email: string;
    userId: number;
}

interface AuthContextProps {
    token: string | null;
    user: User | null;
    setToken: (newToken: string | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken_] = useState<string | null>(() => sessionStorage.getItem('token'));
    const [user, setUser] = useState<User | null>(null);

    const setToken = (newToken: string | null): void => {
        setToken_(newToken);
        if (newToken) {
            const decodedToken: DecodedToken = jwtDecode<DecodedToken>(newToken); // Especificamos el tipo DecodedToken
            const userData: User = {
                email: decodedToken.email,
                id: decodedToken.userId,
            };
            setUser(userData);
        } else {
            setUser(null);
        }
    };

    const logout = (): void => {
        setToken(null);
        setUser(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            sessionStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            sessionStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo<AuthContextProps>(
        () => ({
            token,
            user,
            setToken,
            logout,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [token, user]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
