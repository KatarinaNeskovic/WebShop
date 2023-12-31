import { ProductList } from '../Products/ProductList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from '../Products/ProductDetails';
import SearchCriteria from '../search/Search';
import { Link } from 'react-router-dom';
import { BasketComponent } from '../basket/BasketComponent';
import { Checkout } from '../Ordering/Checkout';
import { ThankYou } from '../Ordering/ThankYou';

export default function App() {
  return (
    //sx example below

    <Container>
      <Row sx={HeaderStyle} className='navbar-main'>
        <Col sm={1}>
          {' '}
          <Link to={'/'}>
            <button className='button-nav'> Home </button>
          </Link>
        </Col>
        <Col sm={9}>
          {' '}
          <h1 style={{ textAlign: 'center' }}> Shirty </h1>{' '}
        </Col>
        <Col sm={1}>
          {' '}
          <button className='button-nav'> Log in </button>
        </Col>
        <Col sm={1}>
          {' '}
          <Link to={'/basket'}>
            <button className='button-nav'> Basket </button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Col sm={12}>
                  <SearchCriteria />
                </Col>
                <Col sm={12}>
                  <ProductList />
                </Col>
              </>
            }
          />
          <Route
            path='/product/:id'
            element={
              <Container>
                <Col sm={8}>
                  {' '}
                  <ProductDetails />{' '}
                </Col>
              </Container>
            }
          />

          <Route
            path='/basket'
            element={
              <Container>
                <Col sm={8}>
                  {' '}
                  <BasketComponent />{' '}
                </Col>
              </Container>
            }
          />

          <Route
            path='/checkout'
            element={
              <Container>
                <Col sm={8}>
                  {' '}
                  <Checkout />{' '}
                </Col>
              </Container>
            }
          />

          <Route
            path='/thankyou'
            element={
              <Container>
                <Col sm={8}>
                  {' '}
                  <ThankYou />{' '}
                </Col>
              </Container>
            }
          />
        </Routes>
      </Row>

      <Row>
        <Col sm={10}>
          {' '}
          <h1 style={{ textAlign: 'center' }}> Footer </h1>{' '}
        </Col>
      </Row>
    </Container>
  );
}

const HeaderStyle = {
  padding: '10px',
};
