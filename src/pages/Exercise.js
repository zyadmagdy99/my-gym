import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { useParams } from 'react-router-dom'

function Exercise() {
  const [exerciseDetails, setexerciseDetails] = useState({})
  const [exrciseVideos, setexrciseVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchedData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions)
      setexerciseDetails(exerciseData)

      const youtubeData = await fetchData(`${youtubeUrl}/search?query=${exerciseData.name}`, youtubeOptions)
      setexrciseVideos(youtubeData.contents)
      console.log('====================================');
      console.log(youtubeData);
      console.log('====================================');
    }
    fetchedData()
   
}, [id])
  
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}/>
      <ExerciseVideos name={exerciseDetails.name} exrciseVideos={exrciseVideos}/>
    </Box>
  )
}

export default Exercise
