import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    console.log(location.pathname)
    if (loading) {
        return <div className="flex justify-center items-center mt-52">
            <span className="loading loading-ring loading-lg "></span>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'>

        </Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.object,
}
export default PrivateRoute;
