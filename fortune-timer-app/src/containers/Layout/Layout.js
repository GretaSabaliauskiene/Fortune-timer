import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

const Styles = styled.div`
.container-fluid{
    background-image: url(./images/gradiant-background.jpg) ;
    height:100vh;
    background-size: cover;
}
`;
const Layout = (props) => {
    return(
    <Styles>
        <Container fluid>
            {props.children}
        </Container>
    </Styles>
    )
}

export default Layout;