import React from 'react';

const Item = ({ manageItem }) => {
    const { brand, img, price, description, quantity, supplierName } = manageItem
    return (
        <div className="flex justify-center mt-6">

            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-purple-700 font-bold  text-3xl mb-5">{brand}</h5>
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img style={{ width: '100%', height: '250px' }} className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-6">
                    <h4>Supplier:{supplierName}</h4>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <p className='text-xl mb-2'>Quantity: {quantity}</p>
                    <p className='text-xl mb-2'>Price:$ {price}</p>


                    <button type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Stock-Update</button>
                </div>
            </div>
        </div>

    );
};

export default Item;