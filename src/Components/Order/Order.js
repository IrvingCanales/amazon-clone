import React from 'react'
import Product_checkout from '../Product_checkout.js/Product_checkout'
import './Order.css'

export default function Order({order}){
    return(
        <div className="order">
            <h1>Your order</h1>

                <div className="orders_box">
                    <p className="order_id">
                        <small>{order.id}</small>
                    </p>

                    {order.data.basket?.map(item => (
                        <Product_checkout
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imgUrl={item.image}
                            price={item.price}
                            raiting={item.rating}
                            hidden={true}
                        />
                    ))}

                    <h3 className="order_total">Order Total: $ {order.data.amount}</h3>
                </div>
        </div>
    )
}