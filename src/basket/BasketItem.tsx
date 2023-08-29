import { Color, IProduct, Size } from '../Products/Product';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate } from 'react-router-dom';
import { IBasketItem } from './basketStructure';
import { getProductByID } from '../Products/ProductListContext';

export interface BasketItemProps {
    item: IBasketItem
}
export function BasketItem(props: BasketItemProps) {
    const navigate = useNavigate();
    function showDetails(id: string) {
        navigate('/product/' + id) //go to route for product detail once ready
    }

    const product = getProductByID(props.item.productId)
    if (!product) {
        <h1> Product not found </h1>
    }
    else
        return (
            <Card style={{ width: '18rem', cursor: "pointer" }} onClick={e => showDetails(props.item.productId)}>
                <Card.Img variant='top' src={product.imageURL} width='300' height='300' />
                <CardHeader> {product.brand.brandName}</CardHeader>
                <Card.Body>
                    <Card.Title> {product.name}</Card.Title>
                    <Card.Text>
                        <p> Size: {Size[props.item.size]}</p>
                    </Card.Text>
                    <Card.Text>
                        <p> Color: {Color[props.item.color]}</p>
                    </Card.Text>
                    <Card.Text>
                        Amount: {props.item.productAmount}
                        Price: {props.item.price} EUR
                    </Card.Text>
                </Card.Body>
            </Card>
        )
}