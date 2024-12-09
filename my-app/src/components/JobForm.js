import React, { useState } from 'react';

function FindJobs() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            Job_Title: jobTitle,
            Job_Description: jobDescription,
            Company_Name: companyName,
        };

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            if (response.ok) {
                alert('Job Posted Successfully!');
            } else {
                alert('Failed to post job.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };

    return (
        <div>
            <h1 className="text-center text-3xl text-white bg-cover bg-black">Post New Jobs</h1>
            <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
                <div className="flex flex-col space-y-4">
                    <input
                        name="Job_Title"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Job Title"
                        className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="Company_Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company Name"
                        className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="Job_Description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Job Description"
                        className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Post
                    </button>
                </div>
            </main>
        </div>
    );
}

export default FindJobs;
