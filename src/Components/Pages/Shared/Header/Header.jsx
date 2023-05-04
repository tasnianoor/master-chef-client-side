import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import BrandIcon from './../../../../assets/icons/brandicon.png'
import Tooltip from '../Tooltip/Tooltip';

const Header = () => {
    const location = useLocation()
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const activeStyle = {
        color: '#F9A51A'
    }
    return (
        <header className='px-5 mb-5 flex justify-between items-center bg-amber-100 py-3 md:py-5'>
        
            <p className='text-xl md:text-3xl font-bold flex flex-row space-x-2 text-warning'> <img
                        src={BrandIcon}
                        width="40"
                        height="40"
                        alt="React Bootstrap logo"
                    />Chef's Universe</p>
            <nav className=' flex flex-row items-center space-x-3 md:space-x-8 font-bold'>
                <Link style={location.pathname === '/' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/'>Home</Link>
                <Link style={location.pathname === '/blog' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/blog'>Blog</Link>
                {
                    user ? <div className='flex items-center space-x-2 md:space-x-4'>
                        <Tooltip text={user.displayName}>{user.photoURL ? <img className='rounded-full h-6 w-6' src={user.photoURL} alt="" />  : <UserCircleIcon className='h-8 w-8' />}</Tooltip>
                        <button onClick={handleSignOut} className='py-2 px-3 md:px-5 text-black rounded bg-btn-color'>Sign Out</button>
                    </div> : <Link to='/login'><button className='py-2 px-3 md:px-5 text-black rounded bg-btn-color'>Login</button></Link>
                }

            </nav>
        </header>


    );
};

export default Header;