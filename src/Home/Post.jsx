import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdHomeFilled } from "react-icons/md";

const AddJob = () => {
  const [jobData, setJobData] = useState({
    companyName: "",
    location: "",
    jobType: "",
    role: "",
    skillsRequired: "",
    jobId: "",
    jobLink: "",
    experience: "",
    posterName: "",
    posterEmail: "",
    posterCompany: "",
    posterRole: ""
  });

  const postJobData = (event) => {
    const { name, value } = event.target;
    setJobData({ ...jobData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { companyName, location, jobType, role, skillsRequired, jobId, jobLink, experience, posterName, posterEmail, posterCompany, posterRole } = jobData;

    if (companyName && location && jobType && role && skillsRequired && jobId && jobLink && experience && posterName && posterEmail && posterCompany && posterRole) {
      try {
        const res = await fetch(
          "https://jobire-9f505-default-rtdb.firebaseio.com/jobData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              companyName,
              location,
              jobType,
              role,
              skillsRequired,
              jobId,
              jobLink,
              experience,
              posterName,
              posterEmail,
              posterCompany,
              posterRole
            }),
          }
        );

        if (res.ok) {
          setJobData({
            companyName: "",
            location: "",
            jobType: "",
            role: "",
            skillsRequired: "",
            jobId: "",
            jobLink: "",
            experience: "",
            posterName: "",
            posterEmail: "",
            posterCompany: "",
            posterRole: ""
          });
          toast.success("Thanks for Posting a Job on Jobire. If the job listed by you is authentic, it will be listed soon.");
        } else {
          toast.error("Error");
        }
      } catch (error) {
        toast.error("Error storing data: " + error.message);
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <>
      <section className="ml-6 contactus-section min-h-screen flex items-center bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2 mt-2 leading-tight text-center">
            Add a job to Jobire and help connect talented individuals with great opportunities.
          </h1>
          <div className="w-full lg:w-8/12 mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Post a Job</h2>
            <form method="POST" onSubmit={submitData}>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="posterName" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="posterName"
                    id="posterName"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Your Name"
                    value={jobData.posterName}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="posterEmail" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="posterEmail"
                    id="posterEmail"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Your Email"
                    value={jobData.posterEmail}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2">
                  <label htmlFor="posterRole" className="sr-only">Your Role</label>
                  <input
                    type="text"
                    name="posterRole"
                    id="posterRole"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Your Role"
                    value={jobData.posterRole}
                    onChange={postJobData}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="posterCompany" className="sr-only">Current Company</label>
                  <input
                    type="text"
                    name="posterCompany"
                    id="posterCompany"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Current Company"
                    value={jobData.posterCompany}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="jobId" className="sr-only">Job ID</label>
                  <input
                    type="text"
                    name="jobId"
                    id="jobId"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Job ID"
                    value={jobData.jobId}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2">
                  <label htmlFor="jobLink" className="sr-only">Job Link</label>
                  <input
                    type="text"
                    name="jobLink"
                    id="jobLink"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Job Link"
                    value={jobData.jobLink}
                    onChange={postJobData}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="companyName" className="sr-only">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Company Name"
                    value={jobData.companyName}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="role" className="sr-only">Role</label>
                  <input
                    type="text"
                    name="role"
                    id="role"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Role"
                    value={jobData.role}
                    onChange={postJobData}
                  />
                </div>
                <div className="w-full lg:w-1/3 px-2">
                  <label htmlFor="skillsRequired" className="sr-only">Skills Required</label>
                  <input
                    type="text"
                    name="skillsRequired"
                    id="skillsRequired"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Skills Required"
                    value={jobData.skillsRequired}
                    onChange={postJobData}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="location" className="sr-only">Location</label>
                  <select
                    name="location"
                    id="location"
                    className="form-input w-full p-4 border rounded-lg"
                    value={jobData.location}
                    onChange={postJobData}
                  >
                    <option value="" disabled>Location</option>
                    <option value="remote">Remote</option>
                    <option value="in-office">In-Office</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
                  <label htmlFor="jobType" className="sr-only">Job Type</label>
                  <select
                    name="jobType"
                    id="jobType"
                    className="form-input w-full p-4 border rounded-lg"
                    value={jobData.jobType}
                    onChange={postJobData}
                  >
                    <option value="" disabled>Job Type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 px-2">
                  <label htmlFor="experience" className="sr-only">Experience Level</label>
                  <select
                    name="experience"
                    id="experience"
                    className="form-input w-full p-4 border rounded-lg"
                    value={jobData.experience}
                    onChange={postJobData}
                  >
                    <option value="" disabled>Experience Level</option>
                    <option value="fresher">Fresher</option>
                    <option value="junior">Junior Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full py-4 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full lg:w-8/12 mx-auto mt-2">
            <div className="flex justify-center">
              <Link to="/home">
                <button className="flex items-center bg-purple-900 text-white py-3 px-6 rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-indigo-800">
                  <MdHomeFilled className="mr-2" />
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default AddJob;
