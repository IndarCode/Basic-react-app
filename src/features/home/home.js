import React, { useState, useEffect } from 'react';
import { Heading1, Heading4, PrimaryButton, SecondaryButton } from '../../components/styled/styled';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';


function Home() {
const navigate = useNavigate();
const theme = useTheme()
  return (
    <div className='container'>
            <Heading1 style={{ marginBottom: 10, color: theme.palette.alwaysWhite }} theme={theme}>Basic React App</Heading1>
            <Heading4 style={{fontWeight: 300, color: theme.palette.alwaysWhite }} theme={theme}>This is a basic package collection needed for React app.</Heading4>
            <div style={{margin: '3vw 0'}}>
                <PrimaryButton 
                style={{ borderColor: '#fff', backgroundColor: '#fff', color: '#000'}} 
                onClick={() => navigate('/login')}
                >
                    Login
                </PrimaryButton>
                <SecondaryButton 
                style={{ borderColor: '#fff',color: '#fff' }}
                onClick={() => navigate('/signup')}
                >
                    Sign Up
                </SecondaryButton>
            </div>
    </div>
  )
}

export default Home