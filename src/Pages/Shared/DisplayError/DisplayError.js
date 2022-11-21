import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const navigate=useNavigate();

    const {  logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(e => console.log(e));
            
        navigate('/');

    }
    return (
        <div>
            <p className='text-red-500'>
                Something went wrong</p>

            <p className='text-red-400'>
                {error.StatusText || error.message}</p>

            <p className='text-red-500'>
                Please <br/>
            <button className='btn btn-warning' onClick={handleLogOut}> Signout</button>
            <br/>and log in back !</p>
        </div>
    );
};

export default DisplayError;