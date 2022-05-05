import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 text-center justify-items-center'>
                <div className="flex justify-center mt-6">

                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-purple-700 font-bold  text-3xl mb-5">{item.brand}</h5>
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img style={{ width: '100%', height: '250px' }} className="rounded-t-lg" src={item.img} alt="" />
                        </a>
                        <div className="p-6">
                            <h4>Supplier:{item.supplierName}</h4>
                            <p className="text-gray-700 text-base mb-4">
                                {item.description}
                            </p>
                            <p className='text-xl mb-2'>Quantity: {item.quantity}</p>
                            <p className='text-xl mb-2'>Price:$ {item.price}</p>


                            <div>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">DELIVERY</button>
                            </div>
                            <div>
                                <div class="flex justify-center">
                                    <div class="mb-3 xl:w-96">
                                        <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
                                        ></label>
                                        <input
                                            type="number"
                                            class=" form-control block w-full px-3 py-1.5 text-basefont-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleNumber0"
                                            placeholder="Number input"
                                        />
                                    </div>
                                </div>

                                <button type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">ADD-STOCK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ItemDetails;