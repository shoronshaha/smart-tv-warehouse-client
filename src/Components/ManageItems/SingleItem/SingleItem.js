import React from 'react';
import icon from '../../../Images/Logo/delete.png'

const SingleItem = ({ manageItem }) => {
    const { brand, img, price, description, quantity, supplierName } = manageItem
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {brand}
            </th>
            <td className="px-6 py-4">
                <img className='w-20' src={img} alt="" />
            </td>
            <td className="px-6 py-4">
                {description}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4">
                {supplierName}
            </td>
            <td className="px-6 py-4 text-right">
                <button> <img src={icon} alt="" /></button>
            </td>
        </tr>
    );
};

export default SingleItem;