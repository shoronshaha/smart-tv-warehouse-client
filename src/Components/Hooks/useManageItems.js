import { useEffect, useState } from "react"

const useManageItems = () => {
    const [manageItems, setManageItems] = useState([]);

    useEffect(() => {
        fetch('https://gentle-depths-90710.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, []);
    return [manageItems, setManageItems];
};

export default useManageItems;