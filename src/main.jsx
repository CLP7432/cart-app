import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserApp} from "./components/UserApp.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserApp />
  </StrictMode>,
)
