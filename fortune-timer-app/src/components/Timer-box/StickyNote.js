import React, {Component} from 'react';
import styled from 'styled-components';
import {basic_notebook_pen} from 'react-icons-kit/linea/basic_notebook_pen'
import { Icon } from 'react-icons-kit'




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

class stickyNote extends Component{
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
            <Col>
            <div style={{ color: '#FEDE57' }}>
            <Icon onClick={()=>{this.handleModal()}} size={30} icon={basic_notebook_pen} />   
            <span>notes</span>       
            </div>
                <Modal show={this.state.show}>
                    <Modal.Header>Create a note</Modal.Header>
                    <Modal.Body>
                        hi
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
          </Row>
        </Container>

      </Styles>
  
    )
  }
}

export default stickyNote;