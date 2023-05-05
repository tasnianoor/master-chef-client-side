import React from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <div className='my-5 w-full'>
            <div className='sec4'>
                <h3 className="display-4 text-2xl font-bold fw-semibold">Restaurant Consulting Services</h3>
                <p className="mt-3 mt-md-4">As a consultant and restaurateur, Riccardo and his team work daily with the largest hotel groups in the world, restaurant chains, casinos and cruise companies to support them in the creation of catering and hospitality offers, but also in the development of existing concepts, as well as front of house and back of house team training.
                For them, we follow trends, research & develop innovative concepts in the restaurant business but also turnkey gourmet products that are easy to prepare. From brand and concept design, to architecture, menus, marketing, we’re here to help our clients. From prestigious fine dining to fast casual, our motto is that every restaurant deserves its exceptional experience. This is why we imagine 360° experiences in order to guarantee a successful project.</p>
                <div className="mt-3 d-flex gap-4">
                    <div>
                        <h4>What’s included</h4>
                    </div>
                    <div>
                        <ul>
                            <li>Discover</li>
                            <li>Plan</li>
                            <li>Design</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Organize</li>
                            <li>Grow</li>
                            <li>And much more..</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-3">
                    <button className='btn btn-warning'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Section4;
