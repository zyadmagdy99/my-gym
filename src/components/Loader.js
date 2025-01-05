 import React from 'react'
 import {Infinityspin} from "react-loader-spinner"
 import { Stack } from "@mui/material"
 function Loader() {
   return (
     <Stack direction="row" justifyContent="center" alignItems="center" width='100%'>
        <Infinityspin color="gray"/>
     </Stack>
   )
 }
 
 export default Loader
 