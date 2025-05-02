
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.div`
background-color: #0058ab;
padding: 1.5rem 1rem;
display: flex;
align-items: end;
justify-content: space-between;
`

const Title = styled.span`
color: white;
font-weight: 900;
font-size: 2rem;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
margin-right: 1rem;
font-weight: bold;
font-size: 1.2rem;
letter-spacing: 0.15rem;
`

const Navbar = () => {
    return (
    <StyledNav>
        <Title>Odin Shopping Cart</Title>
        <StyledLink to="/Shop">SHOP</StyledLink>
    </StyledNav>)
}

export default Navbar;