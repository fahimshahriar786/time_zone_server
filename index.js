const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
// 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jmokg.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect((err) => {
      const db = client.db("timeZone");
      const djiPackages = db.collection("devices");
      const bookingsCollection = db.collection("bookings");
      const testimonialCollection = db.collection("testimonials");
      const usersCollection = db.collection("users");

      // ==============GET API ====================
     
 //GET API
 app.get("/", (req, res) => {
  res.send("Welcome to timeZone");
});





      //GET API (dji Package)
      



      //GET API (users)
      





      // verify admin data form database
     







        // localhost:5000/users/admin@admin.com will show true
        res.json({ admin: isAdmin });
      });

      //GET API (Bookings)
    






      //GET Dynamic (Bookings)
     




      //GET Dynamic (products)
     




      //GET (testimonials)
     




      // ==========================POST API=========================
      //POST API (dji Package)
      




      //POST API (users)
     




      

      // ======================DELETE API ========================
     



      
