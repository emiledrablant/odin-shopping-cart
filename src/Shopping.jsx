import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from "./components/card"

const StyledContainer = styled.div`
display: grid;
justify-content: center;
justify-items: center;
grid-gap: 16px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
`

const useFetchData = () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => setItems(response))
        .finally(() => setLoading(false));
    }, []);

    return {items, loading};
}

const Shopping = () => {
    const {items, loading} = useFetchData();

    if (loading) return <p>loading items...</p>

    return(
        <StyledContainer>
        {items.map(item => (
            <Card
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price} />
        ))}
        </StyledContainer>
    )
}

export default Shopping