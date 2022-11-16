import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError,setSignUpError] = useState('')
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User created succesfully');
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(e=>console.log(e))

        })
        .catch(err=>{
            console.log(err)
            setSignUpError(err.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'> Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} className="input input-bordered w-full max-w-xs" type="text" placeholder="name" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: true
                        })}  className="input input-bordered w-full max-w-xs" type="email" placeholder="email" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is Required",
                            minLength: {value : 6,message: 'Password must be 6charecters or longer'},
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                     
                        })}  className="input input-bordered w-full max-w-xs" type="password" placeholder="password" />
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    </div>

                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>

                <p>Already have an account <Link to="/login " className='text-primary'>Please Login</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;