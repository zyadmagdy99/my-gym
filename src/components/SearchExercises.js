import React, { useEffect, useState } from 'react'
import { Box, Button, Stack,TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

function SearchExercises({setexercises,bodyPart,setbodyPart}) {

  const [search, setsearch] = useState("")
    const [bodyParts, setbodyParts] = useState([])
  
 
  //Body Parts
  useEffect(() => {
    const fetchExercises = async ()=>{
      const bodyPartsExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setbodyParts(["All",...bodyPartsExercises])
    }
    fetchExercises()
   
  }, [])
  
  //search Filter
  const handleSearch =async () => {
    if(search){
   
     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
     console.log('exerciseData',exercisesData);
     const searchedExercises = exercisesData.filter(
      (item) => item.name.toLowerCase().includes(search)
             || item.target.toLowerCase().includes(search)
             || item.equipment.toLowerCase().includes(search)
             || item.bodyPart.toLowerCase().includes(search),
    );

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    setsearch('');
    console.log('searchedExercises',searchedExercises);
    setexercises(searchedExercises);

  }
};

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography fontWeight={700} sx={{
        fontSize:{xs:"px",lg:"44px"},
      }} mb="50px" textAlign="center">Awesome Exercises You <br/> Should Know</Typography>
      <Box position="relative" flexDirection="row" mb="72px">
        <TextField sx={{
          input:{
            fontWeight:"700",border:"none",borderRadius:"4px"
          },
          width:{lg:"800px",xs:"250px",md:"400px"},backgroundColor:"#fff",borderRadius:"40px"
        }}
         height="76px"
          value={search}  
           onChange={(e)=>{setsearch(e.target.value.toLowerCase())} }
           placeholder='Search Exercises'
           type='text'>  </TextField>
           <Button onClick={handleSearch} className='search-btn' sx={{
           bgcolor:"#ff2625",color:"#fff",textTransform:"none",width:{lg:"175px",xs:"80px"},height:"56px"}}>
              Search
           </Button>
      </Box>
      <Box>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
