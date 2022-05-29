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
      
      app.get("/Devices", async (req, res) => {
        const result = await djiPackages.find({}).toArray();
        res.send(result);
      });



      //GET API (users)
      

      app.get("/users", async (req, res) => {
        const result = await usersCollection.find({}).toArray();
        res.send(result);
      });



      // verify admin data form database
     

      app.get("/users/:email", async (req, res) => {
        const email = req.params.email;
        const query = { email: email };
        const user = await usersCollection.findOne(query);
        let isAdmin = false;
        if (user?.role === "admin") {
          isAdmin = true;
        }






        // localhost:5000/users/admin@admin.com will show true
        res.json({ admin: isAdmin });
      });

      //GET API (Bookings)
    


      app.get("/bookings", async (req, res) => {
        let query = {};
        const email = req.query.email;
        if (email) {
          query = { email: email };
        }
        const result = await bookingsCollection.find(query).toArray();
        res.send(result);
      });




      //GET Dynamic (Bookings)
     

      app.get("/bookings/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await bookingsCollection.findOne(query);
        res.send(result);
      });



      //GET Dynamic (products)
     
      app.get("/Devices/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await djiPackages.findOne(query);
        res.send(result);
      });





      //GET (testimonials)
     




      // ==========================POST API=========================
      //POST API (dji Package)
      




      //POST API (users)
     




      

      // ======================DELETE API ========================
     



      
