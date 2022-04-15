// import necessary object from rrd
import { Outlet, Navigate } from "react-router";

const useAuth = () => {
    const user = localStorage.getItem('user')
    if(user){
        return true
    } else {
        return false
    }
}

const PrivateRoute = (props) => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to='/login' />
}

export default PrivateRoute