import Container from 'react-bootstrap/Container';
import './Navigation.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone } from 'react-icons/fa6';
import { BsFillGearFill } from 'react-icons/bs';
import { Navbar } from 'react-bootstrap';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      className="nav-color"
    >
      <Container>
        <button
          type="button"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft className="leftarrow" />
        </button>

        <Navbar.Brand className="title-header" href="#home">
          {location.pathname === '/'
            ? 'Countries in Europe'
            : 'Country Details'}
        </Navbar.Brand>

        <span className="search-icon-conatiner">
          <FaMicrophone className="search-icon microphone" />
          <BsFillGearFill className="search-icon" />
        </span>
      </Container>
    </Navbar>
  );
}

export default Navigation;
