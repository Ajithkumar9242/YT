import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import Feed from './components/Feed'


function Finalise() {
  return (
   
    <BrowserRouter>
    
    <Box sx={{ backgroundColor: '#000'}}>
      
    
      <Navbar />
      
      <Routes>
 
        <Route exact path='/' element={<Feed />} />

        <Route path='/video/:id' element={<VideoDetail />} />

       

        <Route path='/search/:searchTerm' element={<SearchFeed />} />

      </Routes>
     
      
    </Box>
 
    </BrowserRouter>
    
    
  )
}

export default Finalise