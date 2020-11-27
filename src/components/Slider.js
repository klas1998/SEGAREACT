import React from "react";
import { Carousel } from "react-bootstrap";
import cars from '../img/cars.jpg' ;
import metro from '../img/metro.jpg' ;
import overlord from '../img/overlord.jpg' ;

export default function  Slider () {

    return (
     <Carousel>
         <Carousel.Item style ={{'height': '600px'}}>
             <img className ="d-block w-100"
             src={cars}
             alt="First slide"
             />
             <Carousel.Caption>
                 <h3>ESCAPE FROM ПРИДНЕСТРОВЬЕ</h3>
             </Carousel.Caption>
             
         </Carousel.Item>
         <Carousel.Item style ={{'height': '600px'}}>
             <img className ="d-block w-100"
             src={metro}
             alt="Second slide"
             />
             <Carousel.Caption >
                 <h3>Tiraspol</h3>
             </Carousel.Caption>
             
         </Carousel.Item>
         <Carousel.Item style ={{'height': '600px'}}d>
             <img className ="d-block w-100"
             src={overlord}
             alt="Third slide"
             />
             <Carousel.Caption>
                 <h3>OVERLORD</h3>
             </Carousel.Caption>
             
         </Carousel.Item>
     </Carousel>
    );
}

