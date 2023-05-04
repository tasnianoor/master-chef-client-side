import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import TraditionalFood from '../TraditionalFood/TraditionalFood';
import Courses from '../Courses/Courses';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../Provider/AuthProvider';
import Statistics from '../Statistics/Statistics'
import Section4 from '../Section4/Section4'

const Home = () => {
    const { loading} = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center items-center'>
            {
                loading ? <Loader /> :
                    <>
                        <Banner />
                        <Chef />
                        <TraditionalFood />
                        <Courses />
                        <Statistics></Statistics>
                        <Section4></Section4>
                    </>
            }
        </div>
    );
};

export default Home;
