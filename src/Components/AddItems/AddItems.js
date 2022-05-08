import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddItems = () => {
    const [user] = useAuthState(auth);

    if (user) {
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addItem = {
            brand: event.target.brand.value,
            email: event.target.email.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            description: event.target.description.value,
            img: event.target.img.value,
        };
        await axios.post('http://localhost:5000/addItem', addItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your item is added !!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className="mt-20 w-full">
            <PageTitle title='AddItems'></PageTitle>
            <div className="bg-[#a4c3b2] p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />

                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Email
                        </label>
                        <input
                            readOnly
                            value={user?.email}
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Supplier Name
                        </label>
                        <input
                            type="text"
                            name="supplierName"
                            placeholder="Supplier Name"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400
                        text-gray-600 placeholder-gray-400
                        outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-black">
                            Description
                        </label>
                        <input
                            type="textArea"
                            name="description"
                            placeholder="Descriptions"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-10">
                        <label
                            className="inline-block w-40 mr-6 text-right
                                    font-bold text-black"
                        >
                            Image
                        </label>
                        <input
                            type="text"
                            name="img"
                            placeholder="url"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>

                    <div className="text-right">
                        <button type='submit' className="py-3 px-8 bg-orange-600 text-white font-bold">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AddItems;