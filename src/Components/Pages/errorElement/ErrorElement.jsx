import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import page from '../../../assets/404.jpg';

const ErrorElement = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader />
    } else {

    return <img className='mb-5 mx-auto h-screen w-full inset-0 bg-cover bg-center' src={page} alt="" />
    }


};

export default ErrorElement;