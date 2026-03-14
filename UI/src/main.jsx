import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/SignUp.jsx'
import SignIn from './Components/SignIn.jsx'
import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <SignIn />
    <SignUp />
  </StrictMode>
);
