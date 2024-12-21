import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                //  navigate after login
                navigate(location.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-11/12 mx-auto mt-5">
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center">Please Login</h2>

                <form onSubmit={handleLogin} className="card-body md:3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="underline text-[#F75B5F] font-bold" to="/register">Register</Link></p>

            </div>

        </div>
    );
};

export default Login;