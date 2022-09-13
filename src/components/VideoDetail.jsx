import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography , Box , Stack} from "@mui/material"
import  Videos  from "./Videos"
import { fetchApi } from "./APIDATA"




function VideoDetail() {
  const [videoDetail, setvideoDetail] = useState(null)
 
  const { id } = useParams()

  useEffect(() => {
    
  fetchApi(`videos?part=snippet,statistics&id=${id}`)
  .then((data) => setvideoDetail(data.items[0]))

    
  }, [id])

  if(!videoDetail?.snippet) return 'Loading!!'

  const {snippet: {title, channelTitle} } = videoDetail   

  

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column' , md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky' , top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color='#fff' variant='h5' top="86%">
              {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" sx={{color: '#fff' }} py={1} px={2}>
              
                <Typography variant={{sm: 'subtitle1' , md: 'h6'}} color='#fff'>
                  {channelTitle}
                </Typography>

              

            </Stack>
          </Box>
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail

