import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const express = require("express");
// const dotenv = require("dotenv");
// const app = express();
// const mongoose = require("mongoose");

// dotenv.config(); /*stores the confedetial info in a file */

// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true }, /* to use env secret url*/
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );



// app.listen(8800,()=>
// {
//   console.log("Backend server is running");
// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

