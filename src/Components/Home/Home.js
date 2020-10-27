import React from 'react'
import './Home.css'

import Product from '../Product/Product'

export default function Home(){
    return(
        <div className="home">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home" />

            <div className="home_main">
                    <Product id="123456" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price="11.96" raiting={5} imgUrl="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
                    <Product id="123457" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price="299" raiting={5} imgUrl="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />
            </div>

            <div className="home_main">
                    <Product id="123458" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price="139.99" raiting={4} imgUrl="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                    <Product id="123459" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price="99.99" raiting={4} imgUrl="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
                    <Product id="123460" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price="549.99" raiting={5} imgUrl="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
            </div>

            <div className="home_main">
                    <Product id="123461" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price="1099.49" raiting={5} imgUrl="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />

            </div>


        </div>
        
    )
}