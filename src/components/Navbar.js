import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap:50px;
    padding:20px;
    font-family:'DM Sans', sans-serif;
    font-weight: bold;
    background-color: ${props => props.path === '/design2' ? '#000B49': '#9A0680' };
    text-transform: uppercase;
`

function Navbar() {

    const {pathname} = useLocation()

    return (
        <Container path={pathname}>
            <Link to='/design1' style={{textDecoration:'none', color:'#fff'}}><div>Design 1</div></Link>
            <Link to='/design2' style={{textDecoration:'none', color:'#fff'}}><div>Design 2</div></Link>
        </Container>
    )
}

export default Navbar
