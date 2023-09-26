import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardSidebar } from '../components/DashboardSidebar'
import ListUsers from '../components/ListUsers'
import '../styles/profiles.css'
export const Profiles = () => {
  return (
    <>  
      <DashboardHeader />
      <div className='flex'>
        <DashboardSidebar />
        <div className='w-screen-h-screen'>
        <ListUsers />
        </div>
      </div>

    </>
    
  )
}
