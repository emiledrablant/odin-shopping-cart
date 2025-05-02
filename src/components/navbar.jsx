
import styled from 'styled-components';

const StyledNav = styled.div`
background-color: #0058ab;
padding: 1.5rem 1rem;
`

const Title = styled.span`
color: white;
font-weight: 900;
font-size: 2rem;
`

const Navbar = () => {
    return (
    <StyledNav>
        <Title>Odin Shopping Cart</Title>
    </StyledNav>)
}

export default Navbar;