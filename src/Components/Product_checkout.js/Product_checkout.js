import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Product_checkout.css'
export default function Product_checkout({id, title, price, raiting, imgUrl, hidden}){

    const [{}, dispatch] = useStateValue()

    const removeBasket = ()=>{

        dispatch({
            type: "REMOVE_TO_BASKET",
            id: id,
            
        })

    }

    return(
        <div className="product_checkout">
            
            <img className="product_img" src={imgUrl} alt="img" />

            <div className="product_details">
                    <h2>{title}</h2>
                    <strong>${price}</strong>

                    <div className="product_raiting">
    
                        {Array(raiting)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                    </div>
                    
                    
                    {!hidden && <button onClick={removeBasket} className="producto_btn">Remove from basket</button> }
            </div>
        </div>
    )
}