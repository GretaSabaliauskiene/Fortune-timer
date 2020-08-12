import React, {Component} from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Countdown from '../components/Timer-box/Countdown';

const Styles = styled.div`
.countdown{
    display:flex;
    width:100%;
    justify-content: space-around;
    flex-flow: row nowrap;
    font-size:19px;


}
.countdown-segment-caption{
    display:block;

}
.coundown-segment-number{

}
`;

class SetTimer extends Component{
    state = {
        countdown: {
            futureDate: "2020.09.12 00:00:00"
        }
    }
    render(){
        const {
            countdown
        } = this.state;
    return (
        <Styles>
            <Row>
                <Col  md={{ span: 8, offset: 2 }}>
                   <Countdown futureDate={countdown.futureDate} ></Countdown>
                </Col>
       
            </Row>
        </Styles>
    )}
}

export default SetTimer;