import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h1 className='text-3xl'>welcome to details: {itemId}</h1>

            <img src="img" alt="" />


        </div>
    );
};

export default ItemDetails;