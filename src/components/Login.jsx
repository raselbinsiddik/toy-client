import { Link } from 'react-router-dom';
import login from '../assets/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
        })
    }

    const handleGoogle = ()=>{
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='text-center'>
                        <button onClick={handleGoogle} className='flex bg-blue-500 p-2 w-full text-xl rounded-xl mb-5 font-bold'><FaGoogle className='text-white mr-3 text-3xl ms-16'></FaGoogle>Google Sign In</button>
                    </div>
                    <img className='w-96' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className='text-red-500'> {error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <a>Are you new in this site? <Link to="/register">Register</Link></a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;