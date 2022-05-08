import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Carousel from '../Carousel/Carousel';
import FeedBack from '../FeedBack/FeedBack';
import Items from '../Items/Items';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Carousel></Carousel>
            <Items></Items>
            <Testimonial></Testimonial>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;