import React from 'react';
import Slider from './components/Slider';
import Jumbotron from './components/jumbotron';
import {Container, Row, Col, Card} from 'react-bootstrap';

import Caveira from './img/cav.png'
import Goblin from './img/main.jpg'
import Divinity from './img/div.jpg'
import lara from './img/lara.jpg'
import ela from './img/ela.png'
 
export const Home = () => (
    <>
    <Slider />
    <div  style = {{backgroundColor:'#45126B'}}>
    <Container  style={{paddingTop: '2rem',paddingBottom: '2rem' }}>
        <Row>
            <Col>
            <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Caveira}/>
            <Card.Body>
                <Card.Title>
                    Caveira
                </Card.Title>
                <Card.Text>Rainbow6</Card.Text>
            </Card.Body>

            </Card>
            </Col>
            <Col>
            <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Divinity}/>
            <Card.Body>
                <Card.Title>
                    Шедевр
                </Card.Title>
                <Card.Text>DivinityOriginalSin</Card.Text>
            </Card.Body>

            </Card>
            </Col>
            <Col>
            <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Goblin}/>
            <Card.Body>
                <Card.Title>
                    Goblin Slayer
                </Card.Title>
                <Card.Text>✫✫✫</Card.Text>
            </Card.Body>

            </Card>
            </Col>
        </Row>
    </Container>
    </div>
    
    <Jumbotron/>
<div  style = {{backgroundColor:'#45126B'}}>
    <Container style = {{backgroundColor:'#E7E8CC',paddingTop:'1px',paddingBottom:'1px',marginTop:'-30px',}}>
        <Row>
            <Col>
<img src={lara} height={500}/>
            </Col>
            <Col>
<p>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
</p>
            </Col>
   
           
             
        </Row>
    </Container>
    </div>
    </>
)
