import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import loro from '../assets/macau-loro.jpg';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

function Cards1() {
  const navigate = useNavigate();
  const showCards = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
  
    const getProducts = async () => {
      await axios
        .get("http://89.116.25.43:3500/api/productos/listar", {
          headers: { Authorization: `bearer ${token}`, },
        })
        .then((resp) => {
          console.log(resp);
          setData(resp.data.result);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 400) {
            Swal.fire("Información!", err.response.data.message, "error");
          } else if (err.response.status == 401) {
            Swal.fire("Información!", err.response.data.message, "error");
          } else {
            Swal.fire("Información!", "Ocurrio un error!", "error");
          }
        });
    };
  
    useEffect(() => {
      getProducts();
    },[]);
  
  const ir = ()=>{
    navigate("/Regions")
  }

   return (
    <Card style={{ width: '18rem' }}>
      <img className="img_card"src = {loro} alt = "loro" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}}

export default Cards1;
