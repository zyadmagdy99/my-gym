import { Stack, Typography } from '@mui/material'
import React from 'react'
import bodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"

function Details({exerciseDetails}) {
    const {name,bodyPart,gifUrl,target,equipment} = exerciseDetails;
    const extraDetail =[
        {icon:bodyPartImage,name:bodyPart},
        {icon:TargetImage,name:target},
        {icon:EquipmentImage,name:equipment}
    ]
return (
    <Stack gridArea="60px" gap="20px" sx={{flexDirection:{lg:"row"},p:"20px",alignItems:"center"}}>
        <img src={gifUrl} alt={name} loading='lazy' style={{marginBlock:"40px"}} className='detail-image'/>
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
            <Typography variant='h4' textTransform="capitalize">
                    {name}
            </Typography>
            <Typography variant='h6'>
                    Exercise keeps you strong. {name} {` `}
                    is one of the best exercises for {target}. It will help you improve
                    your mood and gain energy.
            </Typography>
            {extraDetail.map((detail,index)=>(
                <Stack key={index} direction="row" alignItems="center"  sx={{gap:"24px"}}>
                    <img src={detail.icon} style={{width:"50px",height:"50px"}} alt={detail.name} loading='lazy'/>
                    <Typography textTransform="capitalize" variant='h5'>
                        {detail.name}
                    </Typography>
                </Stack> 
            ))}
        </Stack>
    </Stack>
)
}

export default Details
