import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';



const Login = () => {
    const { signInUser } = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = (event) =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
        .then(result=>{
            console.log(result)
            event.target.reset()
            navigate(location.state || "/")
        })
        .catch(error=>{
            console.log(error)
        })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">LogIn now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">LogIn</button>
                            </fieldset>
                        </form>
                        <p>New to our website? Please <Link to={'/register'}><span className='text-blue-500'>Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;