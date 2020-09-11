import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


function Product({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const [value, setValue] = React.useState({rating});

    console.log("This is the basket >>>", basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product__rating">
                        {/* {Array(rating).fill().map((_, i) => (
                        <p></p>  
                        ))} */}
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                </p>
            </div>

            <img
                className="product__logo"
                src={image}
                alt=""
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
