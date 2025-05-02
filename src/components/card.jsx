
import styled from "styled-components";

/* import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
<Icon path={mdiCartOutline} size={2} /> */

const StyledCard = styled.div`
background-color: #fff;
border-radius: 8px;

margin: 1rem;
padding: 1rem 1.5rem;
display: flex;
flex-direction: column;

gap: 8px;
`

const Title = styled.h2`
font-size: 1.6rem;
`

const Price = styled.p`
color: green;
font-size: 1.2rem;
font-weight: bold;
`

const Card = ({title, image, price}) => {

    return (
        <StyledCard>
            {image}
            <Title>{title}</Title>
            <Price>{price}</Price>
        </StyledCard>
    )
}

export default Card;