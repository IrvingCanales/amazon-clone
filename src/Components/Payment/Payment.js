import React from 'react'
import { useStateValue } from '../../StateProvider'
import Product_checkout from '../Product_checkout.js/Product_checkout'
import TextField from  '@material-ui/core/TextField';
import {getBasketTotal} from '../../Reducer'
import {db} from '../../firebase'

import './Payment.css'
import { useHistory } from 'react-router-dom';


export default function Payment(){

    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory()

    const buyNow = ()=>{


        const today = new Date()
        const paymentId = Math.floor(Math.random() * (200 - 0)) + 0 + 'AsW3sIn3s'
        

        try {
            db
              .collection('users')
              .doc(user.uid)
              .collection('orders')
              .doc(paymentId)
              .set({
                  basket: basket,
                  amount: getBasketTotal(basket),
                  created: today
              })    

            dispatch({
                type:'EMPTY_BASKET'
            })

        } catch (error) {
            console.log(error)
        }
        

        history.push('/orders')
    }

    return(
        <div className="payment">

            <h2>Checkout ({basket.length} items) </h2>
            
            <div className="payment_box">

                <div className="payment_both">
                    <div className="payment_boxLeft">
                        <h3>Delivery Adress:</h3> 
                    </div>

                    <div className="payment_address">
                        <p> {user ? user.email : ''}</p>
                        <p> 123 React Lane</p>
                        <p> Santa Monica, Ca</p>
                        
                    </div>
                </div>
                

                
                
                <div className="payment_both">

                
                    <div className="payment_boxLeft">
                        <h3>Reviews items and delivery</h3> 
                    </div>

                    <div className="payment_boxRight">
                        { basket.map(item =>(
                            <Product_checkout  key={item.id} id={item.id} title={item.title} price={item.price} raiting={item.rating} imgUrl={item.image} />
                        ))}
                        
                    </div>

                </div>

                <div className="payment_both">

                    <div className="payment_boxLeft">
                            <h3>Payment method</h3> 
                        </div>
                    
                    <div className="payment_boxRight">
                        <p> Cards details</p>
                        <TextField  id="outlined-card" label="Card number" size="small" variant="outlined" />
                        <TextField id="outlined-basic" label="MM/YY/CVC" size="small" variant="outlined" />

                        <p>Total:</p>
                        <h4>$ {getBasketTotal(basket)}</h4>
                        <button onClick={buyNow} className="payment_button">Buy now</button>
                        
                    </div>                    
                    
                </div>

                

            </div>
            
        </div>
    )
}