import React from 'react';
import Time from './TimeNow';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`
.col-md-8{
    height:20vh;
    background-color:#D9D7D8;
    border-radius:18px;
    box-shadow:webkit-box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 138px;

}
}
.container-fluid{
    border:1px solid white;
    height:90vh;
    
}
time{
    font-size: 44px;
    line-height:50px;
}
`;

function timeTimer(){
    return (
        <Styles>
        <Container fluid>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Time/> 
                </Col>
            </Row>
        </Container>
        </Styles>
    )
}

export default timeTimer;