import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth(props) {

    const { children } = props
    const {pathname} = useLocation()
    const auth = JSON.parse(localStorage.getItem('auth'))

    console.log("rendering ...........")
  
    if (!auth && pathname !== '/login') {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: '' }} replace />;
    } 
    if (!auth && pathname === '/login') {
        return children;
      } 
    if (auth && pathname === '/login') {
    // Redirect them to the /dashboard page as they are already logged in.
    return <Navigate to="/dashboard" state={{ from: '' }} replace />;
    } 
    return children;
    
  }
  


export default RequireAuth