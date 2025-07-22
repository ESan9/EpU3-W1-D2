import { Row, Col } from "react-bootstrap";
import libriHorror from "../data/horror.json";
import BookCard from "./BookCard";

const BookList = () => (
  <Row className="justify-content-center">
    {libriHorror.map((libro) => (
      <Col
        key={libro.id || libro.title}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="d-flex align-items-stretch"
      >
        <BookCard libro={libro} />
      </Col>
    ))}
  </Row>
);

export default BookList;
