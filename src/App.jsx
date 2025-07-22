import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import Welcome from "./welcome";
import BookList from "./BookList";
import { Container } from "react-bootstrap";
import BookCard from "./BookCard";

function App() {
  return (
    <>
      <body className="d-flex flex-column vh-100">
        <MyNav />

        <main>
          <Welcome />
          <Container className="py-4">
            <h1>Libri Horror</h1>
            <BookList />
          </Container>
        </main>

        <MyFooter />
      </body>
    </>
  );
}

export default App;
