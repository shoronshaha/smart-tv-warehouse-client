import React from 'react';
import useManageItems from '../../Hooks/useManageItems';
import Item from '../Item/Item';

const Items = () => {
    const [manageItems, setManageItems] = useManageItems();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
            {
                manageItems.map(manageItem => manageItem._id < 7 && <Item
                    key={manageItem._id}
                    manageItem={manageItem}></Item>)
            }
        </div>
    );
};

export default Items;