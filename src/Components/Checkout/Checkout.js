import React from 'react'
import { useStateValue } from '../../StateProvider'
import Product_checkout from '../Product_checkout.js/Product_checkout'
import Total from '../Total/Total'
import './Checkout.css'

export default function Checkout(){

    const [{basket, user} ] = useStateValue()

    return(
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout" />

                <h3>Hello, {user?.email}</h3>
                <h2>Your shopping basket</h2>

                {basket.map(item => (
                    <Product_checkout key={item.id} id={item.id} title={item.title} imgUrl={item.image} price={item.price} raiting={item.rating} hidden={false} />
                ))}
                

            </div>

            <div className="checkout_right">
                    <Total/>
            </div>
        </div>
    )
}