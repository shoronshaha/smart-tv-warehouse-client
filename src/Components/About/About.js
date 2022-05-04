import React from 'react';

const About = () => {
    return (
        <div className='mb-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:mt-10 sm:mt-5'>
                <div className='m-10'>
                    <h1 className='text-6xl text-orange-500 font-bold'>Shoron <span className='text-blue-400'>Shaha</span></h1>
                    <p className='mt-5 text-[30px] text-purple-500 font-bold'>Junior Developer</p>
                    <p className='font-bold'>My objective is to obtain a challenging position in a high quality engineering environment where my resourceful experience and academic skills will add value to organizational operations.</p>
                </div>

                <div className=''>
                    <img className='w-[300px] rounded-full' src="https://i.ibb.co/GMs0T5n/profile.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;