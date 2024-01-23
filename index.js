const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 8080;
app.get('/shoti=apikey&=Eugene', async (req, res) => {
  try {
    const response = await axios.post("https://your-shoti-api.vercel.app/api/v1/get", {
      apikey: "$shoti-1hkqdn10t1og6n452qg",// code by Eugene Aguilar 
    });     
	  
console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});