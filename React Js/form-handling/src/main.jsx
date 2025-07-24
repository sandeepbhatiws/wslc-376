import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormHandling from './Components/FormHandling'
import './assets/css/style.css'
import UserDataHandling from './Components/UserDataHadling'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FormHandling /> */}

    <UserDataHandling/>
  </StrictMode>,
)
