import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="0"
                        title="The Lean startup"
                        price={19.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product
                        id="1"
                        title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        price={15.49}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="2"
                        title="AmazonBasics Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"
                        price={16.03}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81wUWVAiWDL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3"
                        title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver - Black"
                        price={12.99}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL320_.jpg"
                    />
                    <Product
                        id="4"
                        title="AmazonBasics Stainless Steel Digital Kitchen Scale with LCD Display, Batteries Included"
                        price={10.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71mcRfq5GsL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="5"
                        title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
                        price={21.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
