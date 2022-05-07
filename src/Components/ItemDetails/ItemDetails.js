import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    let { brand, img, price, description, quantity, supplierName } = item;

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])

    const delivered = () => {
        let Remaining = parseFloat(+item.quantity) - 1;
        let newItem = { brand, img, price, description, quantity: Remaining, supplierName };
        setItem(newItem)
        fetch(`http://localhost:5000/item/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {
                toast("Delivered succeeded!!!!!!!!!!!")
            })
    }


    const addQuantity = (event) => {
        event.preventDefault();
        let updatedItemQuantity = parseFloat(+item.quantity) + parseFloat(event.target.itemQuantity.value);
        let newItem = { brand, img, price, description, quantity: updatedItemQuantity, supplierName }
        setItem(newItem);

        fetch(`http://localhost:5000/item/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(data => {
                event.target.reset()
                toast("add quantity succeeded!!!")
            })
    }


    return (
        <div>
            <div className='grid grid-cols-1 text-center justify-items-center'>
                <div className="flex justify-center mt-6">

                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-purple-700 font-bold  text-3xl mb-5">{item.brand}</h5>
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img style={{ width: '100%', height: '250px' }} className="rounded-t-lg" src={img} alt="" />
                        </a>
                        <div className="p-6">
                            <h4>Supplier:{item.supplierName}</h4>
                            <p className="text-gray-700 text-base mb-4">
                                {item.description}
                            </p>
                            <p className='text-xl mb-2'>Quantity: {item.quantity}</p>
                            <p className='text-xl mb-2'>Price:$ {item.price}</p>


                            <div>
                                <button onClick={() => delivered(quantity)} type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">DELIVERY</button>
                            </div>
                        </div>
                        <form onSubmit={addQuantity} className="py-10">
                            <div className="flex justify-center">
                                <input className='border border-red-300 my-5' type="number" name='itemQuantity' placeholder='addQuantity' />
                            </div>

                            <button type="submit" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out ">ADD-QUANTITY</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ItemDetails;