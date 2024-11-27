import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdHomeFilled } from "react-icons/md";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    college: "",
    company: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, college, company } = userData;

    if (firstName && lastName && phone && email && address && college && company) {
      try {
        const res = await fetch(
          "https://jobire-9f505-default-rtdb.firebaseio.com/userData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              address,
              college,
              company,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            college: "",
            company: "",
          });
          toast.success("Thanks for joining Jobire");
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
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Jobire creates a strong connection for job searching. By registering, you can refer others, help them grow, and together achieve success.
            </h1>
            <p className="text-lg mb-4">
              After registering on Jobire, you will become eligible to refer and get connect with other Jobire users.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/home">
                <button className="flex items-center bg-purple-900 text-white py-3 px-6 rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-indigo-800">
                  <MdHomeFilled className="mr-2" />
                  Go Home
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-5/12 bg-white text-black p-8 rounded-lg shadow-lg mr-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form method="POST" onSubmit={submitData}>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                    autoComplete="given-name"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                    autoComplete="family-name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                    autoComplete="tel"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2">
                  <label htmlFor="email" className="sr-only">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input w-full p-4 border rounded-lg"
                    placeholder="Email ID"
                    value={userData.email}
                    onChange={postUserData}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="sr-only">Add Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-input w-full p-4 border rounded-lg"
                  placeholder="Add Address"
                  value={userData.address}
                  onChange={postUserData}
                  autoComplete="street-address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="college" className="sr-only">Enter Your College Name</label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  className="form-input w-full p-4 border rounded-lg"
                  placeholder="Enter Your College Name"
                  value={userData.college}
                  onChange={postUserData}
                  autoComplete="organization"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="sr-only">Enter Your Current Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="form-input w-full p-4 border rounded-lg"
                  placeholder="Enter Your Current Company"
                  value={userData.company}
                  onChange={postUserData}
                  autoComplete="organization"
                />
              </div>
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="flexCheckChecked"
                />
                <label className="form-check-label ml-2" htmlFor="flexCheckChecked">
                  I agree that Jobire users may contact me at the email address or phone number above.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-4 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
