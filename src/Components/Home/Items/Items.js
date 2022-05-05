import React from 'react';
import useManageItems from '../../Hooks/useManageItems';
import Item from '../Item/Item';

const Items = () => {
    const [manageItems, setManageItems] = useManageItems();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 sm:gird-cols-2 justify-items-center'>
            {
                manageItems.map((manageItem) => (<Item
                    key={manageItem._id}
                    manageItem={manageItem}></Item>)).slice(0, 6)
            }
        </div>
    );
};

export default Items;