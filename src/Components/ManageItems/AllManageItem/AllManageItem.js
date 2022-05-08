import React from 'react';
import useManageItems from '../../Hooks/useManageItems';
import icon from '../../../Images/Logo/delete.png'
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AllManageItem = () => {
    const [manageItems, setManageItems] = useManageItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://gentle-depths-90710.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = manageItems.filter(manageItem => manageItem._id !== id);
                    setManageItems(remaining);
                })

        }
    }


    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <PageTitle title='AllManageItems'></PageTitle>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Brand name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Picture
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Supplier
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageItems.map(manageItem => {
                            return (
                                <tr key={manageItem._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {manageItem.brand}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='w-20' src={manageItem.img} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {manageItem.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {manageItem.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {manageItem.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {manageItem.supplierName}
                                    </td>
                                    <td className="px-2 py-2">
                                        <button onClick={() => handleDelete(manageItem._id)}> <img src={icon} alt="Delete the Item" /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className='text-center my-10'>
                <Link
                    to='/addItems'
                    className='w-full my-5 py-2 px-3 text-white font-bold mt-3 bg-purple-500 sm:w-auto sm:mb-0 items-center'
                >
                    ADD - ITEMS
                </Link>
            </div>

        </div >
    );
};

export default AllManageItem;