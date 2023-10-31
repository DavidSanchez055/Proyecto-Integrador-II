import React from 'react'
import { DashboardNav } from '../components/DashboardNav'
import { ListRestaurants } from '../components/ListRestaurants'

export const Restaurants = () => {
  return (
    <>
      <DashboardNav/>
      <div className='regions_main'>
        <ListRestaurants/>

      </div>
    </>
  )
}
