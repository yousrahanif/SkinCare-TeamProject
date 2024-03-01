import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Redirect
import { AuthContext } from '../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const [redirectToAppointments, setRedirectToAppointments] = useState(false); // State for redirection

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setRedirectToAppointments(true); // Redirect after successful login
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setRedirectToAppointments(true); // Redirect after successful login
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Redirect to appointments page if redirectToAppointments is true
    if (redirectToAppointments) {
        navigate('/viewAppointments');
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center mt-4 ml-16"> {/* Added text-center class */}
                            <button onClick={handleGoogleSignIn} className="btn btn-danger flex items-center justify-center">
                                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                                Google
                            </button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/signup" className="label-text-alt link link-hover">
                            New to Patient? Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
