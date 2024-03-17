
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProviders';
// import Swal from 'sweetalert2';

// const SignUp = () => {
//     const { user, createUser } = useContext(AuthContext);

//     const handleRegister = event => {
//         event.preventDefault();
    
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         const dob = form.dob.value; // Added date of birth field
//         const phone = form.phone.value; // Added phone number field
//         const gender = form.gender.value; // Added gender field
        
//         // Password length validation
//         if (password.length < 6) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Password must be at least 6 characters long.'
//             });
//             return;
//         }
    
//         // Date of Birth validation
//         const today = new Date();
//         const selectedDate = new Date(dob);
//         if (selectedDate > today) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: "Date of Birth cannot be after today's date."
//             });
//             return;
//         }
    
//         // Phone number validation
//         const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//         if (!phone.match(phoneRegex)) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Please enter a valid phone number.'
//             });
//             return;
//         }
    
//         // Call createUser function
//         createUser(email, password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 form.reset();
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success',
//                     text: 'Registration successful!'
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//                 if (error.code === 'auth/email-already-in-use') {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'This email address is already in use. Please login instead.'
//                     }).then(() => {
//                         // Redirect to login page
//                         window.location.href = '/login';
//                     });
//                 } else {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Registration failed. Please try again later.'
//                     });
//                 }
//             });
//     }

//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col">
//                 <div className="text-center">
//                     <h1 className="text-5xl font-bold">Please Register !</h1>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={handleRegister} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Date of Birth</span>
//                             </label>
//                             <input type="date" name='dob' className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Phone Number</span>
//                             </label>
//                             <input type="tel" name='phone' placeholder="Phone Number" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Gender</span>
//                             </label>
//                             <select name="gender" className="select select-bordered" required>
//                                 <option value="">Select Gender</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Register</button>
//                         </div>
//                         <div className="form-control mt-4">
//                             <label className="label">
//                                 <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
//                             </label>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const dob = form.dob.value; // Added date of birth field
        const phone = form.phone.value; // Added phone number field
        const gender = form.gender.value; // Added gender field

        // Password length validation
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long.'
            });
            return;
        }

        // Date of Birth validation
        const today = new Date();
        const selectedDate = new Date(dob);
        if (selectedDate > today) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Date of Birth cannot be after today's date."
            });
            return;
        }

        // Phone number validation
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (!phone.match(phoneRegex)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid phone number.'
            });
            return;
        }

        // Call createUser function with additional fields
        createUser(email, password, {
            displayName: name,
            dob: dob,
            phone: phone,
            gender: gender
        })
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Registration successful!'
                });
            })
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'This email address is already in use. Please login instead.'
                    }).then(() => {
                        // Redirect to login page
                        window.location.href = '/login';
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Registration failed. Please try again later.'
                    });
                }
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input type="date" name='dob' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select name="gender" className="select select-bordered" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
