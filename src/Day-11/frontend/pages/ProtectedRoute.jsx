import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/Context';

const ProtectedRoute = () => {
    const { user } = useContext(AppContext);
    return user ? <Outlet /> : <Navigate to="/api/user/login" />;
};

export default ProtectedRoute;