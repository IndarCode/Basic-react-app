import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FlexRow, PrimaryButton, SecondaryButton } from '../components/styled/styled'
import ColorModeContext from '../features/app/colorModeContext';

function AuthLayout({children}) {
  const [auth, setauth] = useState(true)
  const navigate = useNavigate()

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  useEffect(() => {
    localStorage.setItem("auth", auth);
    if(!auth) navigate('/login')
  }, [auth])

  return (
    <div>
      <FlexRow style={{ justifyContent: 'space-between'}}>
        <div className='logo'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
        </div>
        <div style={{ position: 'fixed',
    right: '10px',
    top: '10px' }}>
        {theme.palette.mode !== 'dark' ? 'Dark' : 'Light'}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" style={{ marginLeft: 0}}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </FlexRow>
      <div style={{textAlign: 'center'}}>
      <Outlet />
      <SecondaryButton onClick={() => setauth(false)}>Log Out</SecondaryButton>
      </div>
      
    </div>
  )
}

export default AuthLayout