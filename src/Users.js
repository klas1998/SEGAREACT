
import React from 'react';
import {Container,Dropdown,ListGroup} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


export const Users = () => (
    <>
    <div  style = {{backgroundColor:'#45126B'}}>
  <Container style={{display:'flex',justifyContent:'center',padding:'20px'}}>
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
 
  </Container>
  <Container style={{justifyContent:'space-beetwen',margin:'5x'}}>
  <ListGroup>
  <ListGroup.Item >No style</ListGroup.Item>
  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
  <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
  <ListGroup.Item variant="success">Success</ListGroup.Item>
  <ListGroup.Item variant="danger">Danger</ListGroup.Item>
  <ListGroup.Item variant="warning">Warning</ListGroup.Item>
  <ListGroup.Item variant="info">Info</ListGroup.Item>
  <ListGroup.Item variant="light">Light</ListGroup.Item>
  <ListGroup.Item variant="dark">Dark</ListGroup.Item>
</ListGroup>
</Container>
    <Container style={{display:'flex',justifyContent:'center',padding:'15px'}}>
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Container>

<Container>

</Container>

</div>
</>
)
