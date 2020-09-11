import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'
import Rating from "@material-ui/lab/Rating"


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {

    const [{ basket }, dispatch] = useStateValue();
    const [value, setValue] = React.useState({rating});

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image" 
                src={image} 
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/* {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🙂 </p>
                    ))} */}

                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                </div>

                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                ) }
                    
            </div>
        </div>
    )
}

export default CheckoutProduct
