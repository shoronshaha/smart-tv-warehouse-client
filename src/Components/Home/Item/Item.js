import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ manageItem }) => {
    const { _id, brand, img, price, description, quantity, supplierName } = manageItem
    const navigate = useNavigate();

    const navigateToItemDetail = _id => {
        navigate(`/item/${_id}`);
    }
    return (
        <div className="flex justify-center m-10">

            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-purple-700 font-bold text-center mt-3 text-3xl mb-5">{brand}</h5>
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img style={{ width: '90%', height: '250px' }} className="rounded-t-lg justify-center ml-5" src={img} alt="" />
                </a>
                <div className="p-6">
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <h4 className='font-bold text-[20px]'>Supplier: {supplierName}</h4>
                    <p className='text-[18px] mb-2'>Quantity: {quantity}</p>
                    <p className='text-[18px] mb-2'>Price:$ {price}</p>

                    <div className='text-center  mt-5'>
                        <button onClick={() => navigateToItemDetail(_id)} type="button" className="md:w-full inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Stock-Update</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Item;