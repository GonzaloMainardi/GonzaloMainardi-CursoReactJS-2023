import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CardWidget = () => {
  return (
    <Button variant="primary">
      CARRITO <Badge bg="success">10</Badge>
    </Button>
  );
}

export default CardWidget;

