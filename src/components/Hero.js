"use client"

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';


function Hero() {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false
    }
    const slideData=[
        {
            id:0,
            img:"/banner-1.jpg",
            title:"Trending Item",
            mainTitle:"WOMEN'S LATEST FASHION SALE",
            price:"$20"
        },
        {
            id:1,
            img:"/banner-2.jpg",
            title:"Trending Accesories",
            mainTitle:"WOMEN'S SUNGLASSES",
            price:"$15"
        },
        {
            id:3,
            img:"/banner-3.jpg",
            title:"Sale Offer",
            mainTitle:"NEW MEN LATEST SUMMER SALE",
            price:"$30"
        }
    ]
  return (

    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
        {slideData.map((item)=>{
            return <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
            />
        })}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
