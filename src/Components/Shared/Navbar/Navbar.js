import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../Images/Logo/tv logo.png';
const Navbar = () => {
    let Links = [
        { id: 1, name: "HOME", link: "/" },
        { id: 2, name: "ADD ITEMS", link: "/addItems" },
        { id: 3, name: "MY ITEMS", link: "/myItems" },
        { id: 4, name: "MANAGE ITEMS", link: "/manageInventors" },
        { id: 5, name: "BLOG'S", link: "/blogs" },
        { id: 6, name: "ABOUT", link: "/about" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img className='' src={logo} alt="" />
                    </span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 font-[Poppins] ease-in block ${open ? 'top-18 ' : 'top-[-490px]'}`}>

                    {
                        Links.map((link) => (
                            <li key={link.id} className='md:ml-6 text-[16px] md:my-0 my-7'>
                                <Link to={link.link} className='text-gray-800 hover:text-gray-400 bg-white duration-500 font-bold'>{link.name}</Link>
                            </li>
                        ))
                    }

                    <li className='md:ml-8 text-[16px] md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold '><CustomLink to='/login'>LOGIN</CustomLink></li>
                </ul>

            </div>
        </div>
    )
};

export default Navbar;