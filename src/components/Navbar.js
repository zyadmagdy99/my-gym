import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

function Navbar() {

  return (
    <Stack width="150px"  px={"20px"} direction="row" justifyContent="space-around"  sx={{
      gap:{xs:"40px",sm:"123px"},mt:{xs:"20px",sm:"40px"}
    }}>
      <Link to="/">
      <img src={Logo} alt='logo' style={{
        width:"48px",height:"48px",margin:"0 20px"
      }}/>
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
        <Link style={{
          textDecoration:"none",color:"#3A1212",borderBottom:"3px solid #FF2625"
        }} to="/">Home</Link>
        <a href='#exercise' style={{
          textDecoration:"none",color:"#3A1212"
        }}>
            Exercise
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar