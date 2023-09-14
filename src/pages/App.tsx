import { ProductList } from "../Products/ProductList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "../Products/ProductDetails";
import SearchCriteria from "../search/Search";
import { Link } from "react-router-dom";
import { BasketComponent } from "../basket/BasketComponent";
import { Checkout } from "../checkout/Checkout";
import { ThankYou } from "../checkout/ThankYou";

export default function App() {
  return (
    <Container>
      <Row>
        <Col sm={1}>
          {" "}
          <Link to={"/"}> Home </Link>
        </Col>
        <Col sm={9}>
          {" "}
          <h1 style={{ textAlign: "center" }}> TShirt </h1>{" "}
        </Col>
        <Col sm={1}>
          {" "}
          <button> LogIn </button>
        </Col>
        <Col sm={1}>
          {" "}
          <Link to={"/basket"}> Basket </Link>
        </Col>
      </Row>

      <Row>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Col sm={4}>
                  {" "}
                  <SearchCriteria />{" "}
                </Col>
                <Col sm={8}>
                  {" "}
                  <ProductList />{" "}
                </Col>
              </Container>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Container>
                <Col sm={8}>
                  {" "}
                  <ProductDetails />{" "}
                </Col>
              </Container>
            }
          />

          <Route
            path="/basket"
            element={
              <Container>
                <Col sm={8}>
                  {" "}
                  <BasketComponent />{" "}
                </Col>
              </Container>
            }
          />

          <Route
            path="/checkout"
            element={
              <Container>
                <Col sm={8}>
                  {" "}
                  <Checkout/>{" "}
                </Col>
              </Container>
            }
          />

<Route
            path="/thankyou"
            element={
              <Container>
                <Col sm={8}>
                  {" "}
                  <ThankYou/>{" "}
                </Col>
              </Container>
            }
          />

        </Routes>
      </Row>

      <Row>
        <Col sm={10}>
          {" "}
          <h1 style={{ textAlign: "center" }}> Footer </h1>{" "}
        </Col>
      </Row>
    </Container>
  );
}
