import { useEffect, useState } from "react"

const useManageItems = () => {
    const [manageItems, setManageItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, []);
    return [manageItems, setManageItems];
};

export default useManageItems;