import { Link } from 'react-router-dom';
import login from '../assets/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Rgister = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState();
    useTitle('Register');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        // eslint-disable-next-line no-unused-vars
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
        })
            .catch(error => {
                console.log(error);
                setError(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        
                        <img className='w-96 rounded-xl' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                       
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                            <form onSubmit={handleSignIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                    <p className='text-red-500'> {error}</p>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                           
                            </form>
                            <p>Already have account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Rgister;