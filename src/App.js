import React from 'react';
import JavaEditor from "./Editor"
import {Container, Row, Col,Nav,Button,Navbar} from "react-bootstrap"
import PyEditor from "./PyEditor"

class  App extends React.Component {

  constructor(props){
    super(props)
    this.state={python:false,java:true}
  }

  loadEditor=()=>{
    if(this.state.java===true){
      return(
        
        <JavaEditor></JavaEditor>
      
      )
    }
    return(
      <PyEditor></PyEditor>
    )
  }


  loadpy=()=>{
    console.log("py")
    this.setState({java:false})
    this.setState({python:true})
  }

  loadjava=()=>{
    console.log("jav")
    this.setState({python:false})

    this.setState({java:true})

  }


render(){

  return (
    <div >
      <Container fluid>
        <Row>
          <Col>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Practice</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={this.loadjava}>Java Editor</Nav.Link>
                <Nav.Link onClick={this.loadpy}>Python Editor</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>


          </Col>
         
        </Row>
        <div>
          {this.loadEditor()}
        </div>
        
         
         
     </Container>
       
    </div>
  );
}

}

export default App;
