import { Outlet, Navigate } from "react-router";

const useAuth = () => {
    const user = localStorage.getItem('user')
    if(user){
        return true
    } else {
        return false
    }
}

const PrivateRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to='/login' />
}

export default PrivateRoute