import React, { useEffect } from 'react'
import  { Box, Stack, Typography } from "@mui/material"
import ExererciseCard from './ExererciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';
function Exercises({exercises,setexercises,bodyPart}) {
 
  useEffect(() => {
    let fetcheddata = async() =>{
      let ShowedExercises = []
      //but tha api is limited so i will show all
      if(bodyPart === "All"){
        ShowedExercises =await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
        
    } else{
        ShowedExercises =await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
        // ShowedExercises =await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`,exerciseOptions)
    }
    setexercises(ShowedExercises)
  }
   fetcheddata()
  }, [bodyPart,setexercises])
  
  return (
    <Box id={"exercises"} p="20px" sx={{mt:{lg:"100px",xs:"50px"}} }>
      <Typography variant='h4' mb="46px">
        Showing Resaults
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap:{lg:"110px",xs:"50px"}}}>
        {exercises.map((exercise,index)=>(
          <ExererciseCard exercise={exercise} key={index}/>
        ))}
      </Stack>
    </Box>
  )
}


export default Exercises
