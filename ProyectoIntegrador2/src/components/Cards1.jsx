import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import loro from '../assets/macau-loro.jpg';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

function Cards1() {
  const navigate = useNavigate();
  const ir = ()=>{
    navigate("/Regions")
  }
   return (
    <Card style={{ width: '18rem' }}>
      <img className="img_card"src = {loro} alt = "loro" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          SOME quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={ir} >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards1;
