import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout({children}) {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PublicLayout