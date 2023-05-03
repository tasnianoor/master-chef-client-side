import React from 'react';
import page from '../../../assets/404.jpg';

const ErrorElement = () => {
    return (
            <img className='mb-5 mx-auto h-screen w-full inset-0 bg-cover bg-center' src={page} alt="" />
    );
};

export default ErrorElement;