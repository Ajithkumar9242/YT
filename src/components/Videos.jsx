import React from 'react'
import { Stack, Box } from '@mui/material'
import Videocard from './Videocard'
import ChannelCard from './ChannelCard'


function Videos( {videos} ) {
  if(!videos?.length) return "Loading!!!"
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>

      {videos.map((item , idx) => (
        <Box key={idx}>

          {item.id.videoId && <Videocard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}

          


        </Box>
      ))}

    </Stack>
  )
}

export default Videos