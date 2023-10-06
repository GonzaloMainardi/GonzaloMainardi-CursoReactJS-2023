import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css';

const NavBar = () =>   {
  return (
    <Navbar expand="lg" className={styles.Navbar}>
      <Container className={styles.container}>
        <Navbar.Brand className={styles.menuNav} href="#home">HI FIVE</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className={styles.nav}>
                    <Nav.Link className={styles.menuNav} href="#home">INICIO</Nav.Link>
                    <Nav.Link className={styles.menuNav} href="#link">PRODUCTOS</Nav.Link>
                    <Nav.Link className={styles.menuNav} href="#home">CARRITO</Nav.Link>
                    <Nav.Link className={styles.menuNav} href="#link">NOSOTROS</Nav.Link>
                    <Nav.Link className={styles.menuNav} href="#home">CONTACTO</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;