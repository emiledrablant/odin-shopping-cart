
import styled from 'styled-components';

const StyledNav = styled.div`
color: blue;
background-color: red;
`;

const Testo = styled.div`
background-color: black;
color: white;
text-align: center;
padding: 1rem;
`;

const Paragraph = styled.p`
color: red;
background-color: blue;
`;

const Navbar = () => {
    return (
    <>
        <Paragraph>Ceci est un test</Paragraph>
        <Testo>
            <p>Deuxième testo</p>
        </Testo>
    </>)
}

export default Navbar;