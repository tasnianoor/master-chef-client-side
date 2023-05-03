import React, { useContext, useEffect, useState } from 'react';
import TraditionalFoodCard from '../TraditionalFoodCard.jsx/TraditionalFoodCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const TraditionalFood = () => {
    const [traditionalFood, setTraditionalFood] = useState([]);
    const {setLoading} = useContext(AuthContext)

    useEffect(()=>{
        fetch(' https://master-chef-recipes-server-tasnianoor.vercel.app/traditionalFood')
        .then(res=> res.json())
        .then(data => setTraditionalFood(data))
        setLoading(false)
    },[])

    return (
        <div className='w-full my-15'>
            <p className='mb-12 text-4xl text-center font-bold'>Visit Us For Our Traditional  Food</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                {
                    traditionalFood.map(tf => <TraditionalFoodCard
                    tf={tf}
                    key={tf.id}
                    ></TraditionalFoodCard>)
                }
            </div>
        </div>
    );
};

export default TraditionalFood;