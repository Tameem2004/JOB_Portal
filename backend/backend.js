const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow Cross-Origin requests


const url = process.env.MongoDbv;
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

const MongoDbcluster = process.env['MongoDb']

mongoose.connect(MongoDbcluster, {
    dbName: 'Job_Data',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to Jobs database');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

const JobSchema = new mongoose.Schema({
    Job_Title: {
        type: String,
        required: true,
    },
    Job_Description: {
        type: String,
        required: true,
    },
});

const Job = mongoose.model('jobs', JobSchema);

app.get('/', (req, res) => {
    res.send("App is Working");
});

// Endpoint to post a new job
app.post('/register', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);  // Send the saved job as a response
    } catch (err) {
        console.error("Error saving job:", err);
        res.status(500).send("Something Went Wrong");
    }
});

// Endpoint to get all jobs
app.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.find(); // Fetch all jobs from the database
      res.json(jobs); // Send the jobs as a JSON response
    } catch (err) {
      console.error('Error fetching jobs:', err);
      res.status(500).send('Server error');
    }
  });
  
  
app.listen(5000, () => {
    console.log("App listening at port 5000");
});
