import React, {Component} from 'react';
import styled from 'styled-components';
import {basic_notebook_pen} from 'react-icons-kit/linea/basic_notebook_pen';
import { Icon } from 'react-icons-kit';
import StickyNotes from '../Timer-box/StickyNotes';






import { Container,Row,Col,Button, Modal  } from 'react-bootstrap';
const Styles = styled.div`
.col{
  margin-top:50px;
  border-bottom:1px solid white;
  display:flex;
  justify-content: center;
  padding:15px;
 
}
svg{
  cursor:pointer
}
span{
  display:block;
}
`;

class ModalNotes extends Component{
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  render(){
    return (
      <Styles>
        <Container>
          <Row>
            <Col >
            <div style={{ color: '#D9D7D8' }}>
            <Icon onClick={()=>{this.handleModal()}} size={30} icon={basic_notebook_pen} />   
            <span>notes</span>       
            </div>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>Create a note</Modal.Header>
                    <Modal.Body>
                      <StickyNotes/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </Col>
          </Row>
        </Container>

      </Styles>
  
    )
  }
}

export default ModalNotes;