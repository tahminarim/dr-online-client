import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [data, setData] = useState("");
    const { signIn } = useContext(AuthContext)

    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = data => {
       // console.log('data', data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log('user', user);
                setLoginUserEmail(data.email)
                 navigate(from,{replace: true})
            })
            .catch(e => {
                console.log(e.message);
                setLoginError(e.message)
            });
    }
    return (

        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email is Required"
                        })} className="input input-bordered w-full max-w-xs" type="text" placeholder="email" />
                        {errors.email && <p className='text-red-600' > {errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: 'Password must be 6charecters or longer' },

                        })} className="input input-bordered w-full max-w-xs" type="password" placeholder="password" />
                        {errors.password && <p className='text-red-600'> {errors.password.message}</p>}

                    </div>

                    <label className="label">
                        <span className="label-text">Forget Password</span>
                    </label>

                    <input className='btn btn-accent w-full' value="Login" type="submit" />

                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>

                <p>New to Dr Online <Link to="/signup" className='text-primary'> Create a new account</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>


    );
};

export default Login;