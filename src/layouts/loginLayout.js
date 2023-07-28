import React, {useState, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FlexRow, PrimaryButton, SecondaryButton } from '../components/styled/styled'

function LoginLayout({children}) {
  return (
    <div>
      
      <FlexRow style={{ justifyContent: 'space-between'}}>
        <div className='logo'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
        </div>
        <div className='logo'>
        <img src="https://img.freepik.com/premium-vector/butterfly-logo-design-vector_131475-6.jpg?w=740" alt="" />
        </div>
      </FlexRow>
      <div style={{ textAlign: 'center'}}>
      <Outlet />
      </div>
    </div>
  )
}

export default LoginLayout