
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

const StyledNav = styled.div`
background-color: #0058ab;
padding: 1.5rem 1rem;
display: flex;
align-items: end;
justify-content: space-between;
`

const Title = styled(Link)`
color: white;
font-weight: 900;
font-size: 2rem;
text-decoration: none;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
font-weight: bold;
font-size: 1.2rem;
letter-spacing: 0.15rem;
`

const RightIcons = styled.div`
display: flex;
gap: 32px;
padding: 0 1rem;
`

const Navbar = () => {
    return (
    <StyledNav>
        <Title to="/">Odin Shopping Cart</Title>
        <RightIcons>
            <StyledLink to="shop">SHOP</StyledLink>
            <StyledLink to="cart"><Icon path={mdiCartOutline} size={1} /></StyledLink>
        </RightIcons>
    </StyledNav>)
}

export default Navbar;