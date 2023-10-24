import React from 'react'
import pic1 from '../assets/Restaurant1.png'
import pic2 from '../assets/Restaurant2.jpg'
import pic3 from '../assets/Restaurant3.jpg'
import '../styles/listrestaurants.css'

export const ListRestaurants = () => {
  return (
    <>
    <div className='titleRest'>Restaurants</div>
      <ul className='Restaurants_pic'>
        <li className='Restaurants_pic1'>
          <img className='pics'   src = {pic1} alt = "Restaurant1"/>
        </li>
        <li className='Restaurants_pic1'>
          <img className='pics'   src = {pic2} alt = "Restaurant2"/>
        </li>
        <li className='Restaurants_pic1'>
          <img className='pics'   src = {pic2} alt = "Restaurant3"/>
        </li>
      </ul>
    </> 
    
  )
}
