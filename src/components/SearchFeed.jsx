import { useState , React, useEffect } from "react"
import { Box , Typography } from "@mui/material"
import { useParams } from "react-router-dom"

import Videos from "./Videos"
import { fetchApi } from "./APIDATA"

function SearchFeed() {

    const [videos, setvideos] = useState([])
    const { searchTerm } = useParams()


  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
    
  },[searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
      Search Results: <span style={{ color: '#F31503'}}>{searchTerm}</span>
    </Typography>
      <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed