import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCard = ({ libro }) => {
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={libro.img}
      alt={"l'immagine di" + "" + libro.title}
    />
    <Card.Body>
      <Card.Title>{libro.title}</Card.Title>
      <Card.Text>{libro.price}</Card.Text>
      <Button variant="primary">Compra</Button>
    </Card.Body>
  </Card>;
};

export default BookCard;
