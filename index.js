import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
dotenv.config()
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    await mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("connected to MongoDB")
} catch (error) {
    console.log(error)
}

app.listen(port, () =>
{
  console.log(`server is listening on port ${port}`)
})