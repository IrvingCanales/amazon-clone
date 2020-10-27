import React from 'react'

import { useStateValue } from '../../StateProvider'

import './Product.css'

export default function Product({id,title, price, raiting, imgUrl}){

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: imgUrl,
            price: price,
            rating: raiting,
          },
        });
      };

    return(
        <div className="product">

            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                
                <div className="product_raiting">
                 {Array(raiting)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                
            </div>

            <img src={imgUrl} alt="product" />

            <button onClick={addToBasket} >Add to Basket</button>
            
        </div>
    )
}