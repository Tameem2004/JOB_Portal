import React, { useEffect, useState } from 'react';

function FindJobs() {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs data from the backend on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs');
        const data = await response.json();
        setJobs(data); // Update state with fetched jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-white bg-cover bg-black">
        New Jobs
      </h1>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
        <div className="flex items-center space-x-4 mb-8">
          <input
            name="myInput"
            placeholder="Search Job By Title"
            className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">{job.Job_Title}</h2>
              <h3 className="text-xl font-semibold text-gray-800">{job.Company_Name}</h3>
              <p className="text-gray-600 text-sm">{job.Job_Description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Apply
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FindJobs;
