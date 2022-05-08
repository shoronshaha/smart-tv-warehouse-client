import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [addItems, setAddItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getAddItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/addItem?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setAddItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }

        }
        getAddItems();
    }, [user])

    const AddItemDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/addItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = addItems.filter(addItem => addItem._id !== id);
                    setAddItems(remaining);
                })

        }
    }
    return (
        <div>
            <PageTitle title='MyItems'></PageTitle>
            <h2 className='my-5 text-3xl text-center'>Your Items:{addItems.length}</h2>

            {
                addItems.map(addItem => {
                    return (
                        <div key={addItem._id} className='grid grid-cols-1 justify-items-center'>
                            <div className="flex text-center justify-center mt-6">

                                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                    <h5 className="text-purple-700 font-bold  text-3xl mb-5">{addItem.brand}</h5>
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img style={{ width: '90%', height: '250px' }} className="rounded-t-lg justify-center ml-5" src={addItem.img} alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h4>Supplier:{addItem.supplierName}</h4>
                                        <p className="text-gray-700 text-base mb-4">
                                            {addItem.description}
                                        </p>
                                        <p className='text-xl mb-2'>Quantity: {addItem.quantity}</p>
                                        <p className='text-xl mb-2'>Price:$ {addItem.price}</p>


                                        <button onClick={() => AddItemDelete(addItem._id)} type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }

        </div>
    );
};

export default MyItems;