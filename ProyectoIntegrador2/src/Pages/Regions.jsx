import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardNav } from '../components/DashboardNav'
import ListUsers from '../components/ListUsers'
import Cards1 from '../components/Cards1'
import Cards2 from '../components/Cards2'
import { DashboardSidebar } from '../components/DashboardSidebar'
import Carrusel from '../components/Carrusel'


export const Regions = () => {

  return (
    <>
      <DashboardNav />
      <div className='menu flex'>
        
        <div className='w-screen-h-screen'>
          <div className='products_main'>
          <Carrusel />
          <div className='flex_cards'>
            <Cards2 />
            <Cards1 />
            <Cards2 />

          </div>
        </div>
        </div>
      </div>

    </>

  )
}
