// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from '../../../firebase.init';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext)

    const handleRegisterAccount = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    // const handleRegisterAccount = (event) =>{
    //     event.preventDefault()
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(user=>console.log(user.user))
    //     .catch(error=>console.log(error.message))
    //     console.log(email, password)
    // }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegisterAccount}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p>Already have account? Please <Link to={'/login'}><span className='text-blue-500'>LogIn</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;