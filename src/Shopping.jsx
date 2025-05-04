import { useState, useEffect } from 'react';
import Card from "./components/card"

const useFetchData = () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => {
            setItems(response);
            console.log(response);
        })
        .finally(() => setLoading(false));
    }, []);

    return {items, loading};
}

const Shopping = () => {
    const {items, loading} = useFetchData();

    if (loading) return <p>loading items...</p>

    return(
        <>
        {items.map(item => (
            <Card
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price} />
        ))}
        </>
    )
}

export default Shopping