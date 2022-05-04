import React from 'react';
import useManageItems from '../../Hooks/useManageItems';
import SingleItem from '../SingleItem/SingleItem';

const AllManageItem = () => {
    const [manageItems, setManageItems] = useManageItems();
    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        manageItems.map(manageItem => <SingleItem
                            key={manageItem._id}
                            manageItem={manageItem}
                        ></SingleItem>)
                    }

                </tbody>
            </table>
        </div >
    );
};

export default AllManageItem;