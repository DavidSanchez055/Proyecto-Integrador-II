import Carousel from 'react-bootstrap/Carousel';
import Valle from '../assets/valleCocora.jpg';
import Baile from '../assets/adultos-jovenes-disfrutan-festival-tradicional-bailando-al-aire-libre-generado-ia.jpg';
import Calles from '../assets/arquitectura-aire-libre-mezclan-ciudad-mediterranea-historica-ia-generativa.jpg';
import { useState } from 'react';

function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={Baile}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Valle}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Calles}/>
        <Carousel.Caption>
          <h3>Third slide </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;