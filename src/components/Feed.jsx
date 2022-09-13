import { useState , React, useEffect } from "react"
import { Box, Stack ,Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import { fetchApi } from "./APIDATA"

function Feed() {

  const [selectedCategory, setselectedCategory] = useState('NEW')
  const [videos, setvideos] = useState([])


  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
    
  },[selectedCategory])

  return (
    <Stack
    sx={{ flexDirection: {
      sx: "column", md: "row"
    }}}>
 
  <Box  sx={{height: {sx: 'auto' , md:'92vh'},borderRight:'1px solid #3d3d3d' ,px:{ sx: 0, md: 2}}}>

      <Sidebar 
      selectedCategory= {selectedCategory} setselectedCategory={setselectedCategory}
      />    
    
    <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
      Copyright @2022 AStudios
    </Typography>
  </Box>

  <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
      {selectedCategory} <span style={{ color: '#F31503'}}>VIDEOS</span>
    </Typography>
      <Videos videos={videos} />
  </Box>


    </Stack>
  )
}

export default Feed