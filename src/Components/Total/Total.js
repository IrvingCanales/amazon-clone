import React from 'react'
import { useStateValue } from '../../StateProvider'
import {getBasketTotal} from '../../Reducer'
import './Total.css'
import { useHistory } from 'react-router-dom'

export default function Total(){

    const [{basket, user}] = useStateValue()   
    
    const history = useHistory()
    
    return(
        <div className="total">

            <div className="total_title">
                Subtotal ({basket.length} items):  <strong>$ { getBasketTotal(basket) }</strong>
            </div>


            <small className="total_gift">
              <input type="checkbox" /> This order contains a gift
            </small>

           {user && basket.length>0 ? ( <button onClick={()=>history.push('/payment')} >Proceed to checkout</button> ): ''}
        </div>

    )
}