import React from 'react'
import ListProducts from '../components/ListProducts'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardNav } from '../components/DashboardNav'
export const Products = () => {
  return (
    <>
    <DashboardNav/>
    <div className='products_main'>
      <ListProducts />
    </div>
    </>

  )
}
