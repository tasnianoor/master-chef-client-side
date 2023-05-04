import React from 'react';

const TraditionalFoodCard = ({ tf }) => {
    return (
        <div className="card w-full glass rounded-xl">
            <figure><img className='h-64 w-full img-fluid' src={tf.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tf.name}</h2>
                <p>{tf.description}</p>
            </div>
        </div>
    );
};

export default TraditionalFoodCard;