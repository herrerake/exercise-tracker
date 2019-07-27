// express: lightweight and vast webframe for nodejs
// cors: cross origin resource resource sharing. this allows ajax requests
//to skip the same origin policy and access resources from remote hosts.
//the cors package provides an express middleware that can enable cors with different options
//this is going to make it so we can easily access something outside of our server to our server
//mongoose allows use to access mongodb simplier
//dotenv loads environment variables from a dotenv files into process.env this makes 
//development simplier. so instead of setting environment variables on our development machine 
//they can be stored in a file.

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})