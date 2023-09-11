import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardNav } from '../components/DashboardNav'
import ListUsers from '../components/ListUsers'

export const Dashboard = () => {

  return (
    <>
    <div className='w-screen-h-screen'>
      <DashboardHeader />
      <ListUsers />
    </div>

    </>
    
  )
}
