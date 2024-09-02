import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../useAuth/UseAuth";

export const ProtectedRoute: React.FC = () => {
    const { token } = UseAuth();
  
    return token ? <Outlet /> : <Navigate to="/" />;
};
