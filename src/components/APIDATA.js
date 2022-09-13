import axios from "axios";


const URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'db28ce3985msh956ff33be28fa2fp18b3c6jsnf41a9c2d5f2c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchApi = async (url) => {
    const { data } = await axios.get(`${URL}/${url}` , options)

    return data
}