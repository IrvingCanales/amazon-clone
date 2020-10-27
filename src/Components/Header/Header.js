import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from '../../StateProvider'
import {auth} from '../../firebase'

import {Link} from 'react-router-dom'

export default function Header(){

    const [{basket, user}] = useStateValue()

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
    }
    

    return(
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img" />    
            </Link>
            
            <div className="header_search">
                <input className="header_input" />
                <SearchIcon className="header_searchIcon"></SearchIcon>
                
            </div>

            <div className="header_options">

                <Link to="/login" className="header_link">
                    <div onClick={handleAuthenticaton} className="header_option">
                        
                            <span className="option_one">Hello {!user ? 'Guest' : user.email}  </span>
                            <span className="option_two">{user ? 'Sign Out' : 'Sign In'}</span>
                        
                    </div>
                </Link>
                
                <Link to="/orders" className="header_link">
                    <div className="header_option">
                        <span className="option_one">Returns</span>
                        <span className="option_two">& orders</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="option_one">Your</span>
                    <span className="option_two">Prime</span>
                </div>

                <Link to="/checkout" className="header_link">
                    <div className="header_basket">
                        <ShoppingBasketIcon />
                            <span className="option_two option_basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}