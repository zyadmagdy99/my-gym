import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import HeroBannerImage from '../assets/images/banner.png'
function HeroBanner() {
  return (
    <Box  sx={{mt:{lg:"160px",xs:"70px"},ml:{sm:"50px"},textAlign:{xs:"center",md:"left"}}} position="relative" p="20px">
        <Typography color='#FF2625' fontFamily="600" fontSize="26px">Fitness Club</Typography>
        <Typography mb="23px" mt="30px"  fontWeight={700} sx={{fontSize:{lg:"44px",xs:"40px"}}}>Sweat, Smile <br/> and Repeat</Typography>
        <Typography lineHeight="35px" fontSize="22px" >Check out the most effective exercise</Typography>
        <Button  sx={{backgroundColor:"#ff2625",mt:"20px"}} color="error" variant="contained" href='#exercises'>Explore Exercises</Button>
        <Typography  fontWeight={600}  color='#ff2625' sx={{opacity:0.1, display:{lg:"block",xs:"none",fontSize:"200px"}}}>Exercise</Typography>
        <img className='hero-banner-img' src={HeroBannerImage} alt='hero-banner' />
    </Box>
  )
}

export default HeroBanner
