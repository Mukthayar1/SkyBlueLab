import axios from 'axios';



export default axios.create({
  baseURL: "https://stitch2stitch.azurewebsites.net/api/",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 1000 * 100, 
});


// baseURL: "https://www.tristarembroidery.net/api",




