import React from 'react'
import AdminHeader from '../../pages/Admin/AdminHeader/INDEX.JSX'
import { Outlet } from 'react-router-dom'



const AdminLayout = () => {
  return (
   <>
   <AdminHeader/>
   <Outlet/>

   </>
  )
}

export default AdminLayout