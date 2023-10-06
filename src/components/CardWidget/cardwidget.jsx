import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {ShoppingCartOutlined } from '@ant-design/icons';


const CardWidget = () => {
  return (
    <Button variant="success">
       <ShoppingCartOutlined />
       <Badge bg="success"> 5</Badge>
    </Button>
  );
}

export default CardWidget;

