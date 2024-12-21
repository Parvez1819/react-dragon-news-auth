import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoURL = form.get('photo');
        console.log(name, photoURL, email, password)

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error=>{
                console.error(error)
            })
    }

    return (
        <div className="w-11/12 mx-auto mt-5">

            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center">Please Register</h2>

                <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account <Link className="underline text-[#F75B5F] font-bold" to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;