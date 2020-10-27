import React, { useEffect, useState } from 'react'
import './Orders.css'
import {db} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import Order from '../Order/Order'

export default function Orders(){

    const [{user}] = useStateValue()
    const [orders, setOrders] = useState()

    useEffect( ()=>{

        db.collection('users')
        .doc(user.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

    },[user])

    return(
        <div className="orders">
            <h1>Your orders</h1>
            {orders?.map(order => (
                    <Order key={order.id} order={order} />
                ))}
        </div>
    )
}