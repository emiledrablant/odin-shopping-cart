
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = styled.h2`
font-size: 1.6rem;
color: black;
`

const StyledCard = styled(Link)`
background-color: #fff;
border-radius: 8px;

text-decoration: none;
margin: 1rem;
padding: 1rem 1.5rem;
display: flex;
flex-direction: column;

gap: 8px;
`


const Price = styled.p`
color: green;
font-size: 1.2rem;
font-weight: bold;
`

const Image = styled.img`
width: 80px;
align-self: center;
margin-bottom: 8px;
`

const Card = ({title, image, price}) => {

    return (
        <StyledCard>
            <Image src={image} alt="" />
            <Title>{title}</Title>
            <Price>{price} €</Price>
        </StyledCard>
    )
}

export default Card;