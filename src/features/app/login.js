import React, {useState, useEffect} from 'react'
import { Heading2, Heading5, Paragraph, SecondaryButton } from '../../components/styled/styled'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [auth, setauth] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("auth", auth);
    if(auth) navigate('/dashboard')
  }, [auth])
  
  return (
    <div className='block'>
      <Heading2 style={{ marginBottom: '1vw'}}>Login</Heading2>
      <Heading5>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</Heading5>
      <SecondaryButton onClick={() => setauth(true)} style={{ marginTop: '3.5vw'}}>Login</SecondaryButton>
    </div>
  )
}

export default Login