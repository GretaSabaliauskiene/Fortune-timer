import React from 'react';
import Time from './TimeNow';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Styles = styled.div`

time{
    font-size: 44px;
    line-height:50px;
}
`;

function timeTimer(){
    return (
        <Styles>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Time/> 
                </Col>
            </Row>
        </Styles>
    )
}

export default timeTimer;