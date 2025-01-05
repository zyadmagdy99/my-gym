import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function ExerciseVideos({name,exrciseVideos}) {
    console.log('====================================');
    console.log(exrciseVideos);
    console.log('====================================');
  return (
    <Box sx={{marginTop:{lg:"200px",xs:"20px"}}} p="20px"> 
      <Typography variant='h4' mb="46px">
        Watch <span style={{textTransform:"capitalize",color:"#ff2625"}}>{name}</span> Exercise Videos
      </Typography>

      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
        flexDirection:{lg:"row",xs:"column"},gap:{lg:"110px",xs:"0px"}
      }}>
        {exrciseVideos.slice(0,6).map((item,index)=>(
            <a key={index} style={{textDecoration:"none",marginBlock:"20px"}} href={`http://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} style={{width:"300px"}} alt={item.video.title} loading='lazy'/>
                    <Box>
                    <Typography variant='h5'  color="#000">
                            {item.video.title.split(" ").slice(0,4).join(" ")}
                        </Typography>
                        <Typography variant='h6' color="#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
            </a>
        ))}
      </Stack>
      </Box>
  )
}

export default ExerciseVideos

