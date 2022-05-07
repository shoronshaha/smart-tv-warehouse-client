import React from 'react';
import Carousel from '../Carousel/Carousel';
import Items from '../Items/Items';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Items></Items>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;