import { useEffect, useState } from "react"

const useManageItems = () => {
    const [manageItems, setManageItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, []);
    return [manageItems, setManageItems];
};

export default useManageItems;