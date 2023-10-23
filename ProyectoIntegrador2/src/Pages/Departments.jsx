import React from 'react'
import { DashboardNav } from '../components/DashboardNav'
import { ListDepartments } from '../components/ListDepartments'

export const Departments = () => {
  return (
    <>
      <DashboardNav/>
      <div className='regions_main'>
        <ListDepartments/>

      </div>
    </>
  )
}
