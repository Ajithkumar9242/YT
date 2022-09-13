import React from 'react'
import { Link } from 'react-router-dom'
import {  Card , CardMedia, CardContent, Typography } from '@mui/material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from './components'



function Videocard({ video: { id:
    {videoId },
    snippet}}) {
  return (
    <Card sx={{ width: {md: '320px', xs:'100%', sm:'358px'}, boxShadow:'none',borederRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet.title} sx={{ width: {sm:'358px',md:'358px', xs:'100%'}, height:180}}/>
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight='bold' color='#fff'>

            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}

          </Typography>
        </Link>



        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`  : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight='bold' color='#fff'>

            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}

          </Typography>
        </Link>





        </CardContent>
    </Card>
  )
}

export default Videocard