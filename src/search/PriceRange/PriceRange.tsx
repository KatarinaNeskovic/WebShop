import { Accordion, Container } from 'react-bootstrap';
import { useFilterProductProvider } from '../FilteredProductContext';
import { useState } from 'react';
import './PriceRange.css';

export default function PriceRange() {
  const [filteredProducts, dispatch] = useFilterProductProvider();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Select price </Accordion.Header>
        <Accordion.Body>
          <label htmlFor='from' className='label-price'>
            from
            <input
              className='input-price'
              onChange={(e) =>
                dispatch({
                  type: 'rangeFrom',
                  from: Number(e.target.value),
                })
              }
              value={filteredProducts.searchCriteria.priceRange?.from}
              name='from'
              type='number'
            />
          </label>

          <label htmlFor='to' className='label-price'>
            {' '}
            to{' '}
          </label>
          <input
            className='input-price'
            onChange={(e) =>
              dispatch({
                type: 'rangeTo',
                to: Number(e.target.value),
              })
            }
            value={filteredProducts.searchCriteria.priceRange?.to}
            name='to'
            type='number'
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

// const mainArray = [1, 2, 3, 4, 5];
// const subArray = [2, 4];

// const isSubArrayContained = subArray.every(elem => mainArray.includes(elem));

// console.log(isSubArrayContained); // true
