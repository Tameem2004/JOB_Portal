import React from 'react';
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleRedirect2 = (path) => {
    navigate(path);
  }

  return (
    <div>
      <h1 class="text-center text-3xl text-white bg-cover bg-black">Job Application Tracker</h1>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div class=" space-x-8 ">
      <button class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg" onClick={() => handleRedirect("/jobs")}>
        Find Jobs
      </button>
      <button class="px-6 py-2 bg-red-700  text-white font-semibold rounded-lg" onClick={() => handleRedirect2("/add-job")}>
        Post Jobs
      </button>
      </div>
      </main>
    </div>
  );
};

export default Job;
