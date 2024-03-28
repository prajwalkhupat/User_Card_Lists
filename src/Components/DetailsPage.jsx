import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InitialsImage from "./InitialImage";

const UserDetailPage = ({ data, setData }) => {
  const { id } = useParams();
  const user = data.find((user) => user.id === parseInt(id));

  // Set initial state with current user details
  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    address: {
      street: user?.address.street || "",
      suite: user?.address.suite || "",
      city: user?.address.city || "",
      zipcode: user?.address.zipcode || "",
    },
    website: user?.website || "",
    company: {
      name: user?.company.name || "",
      catchPhrase: user?.company.catchPhrase || "",
      bs: user?.company.bs || "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateUserDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((updatedUserData) => {
        // Update the data array with the updated user details
        setData((prevData) =>
          prevData.map((user) =>
            user.id === updatedUserData.id ? updatedUserData : user
          )
        );
        console.log("Updated user details:", updatedUserData);
        // You can handle success response here, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error updating user details:", error);
        // You can handle error response here, e.g., show an error message
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
    
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>
      <div className="mr-4">
          <InitialsImage name={updatedUser.name} />
      </div>
      {user && (
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-3 p-10 bg-gray-100 rounded-md">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              className="input-field"
            />
            <label htmlFor="username" className="mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={updatedUser.username}
              onChange={handleInputChange}
              className="input-field"
            />
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              className="input-field"
            />
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="mb-1">
              Street:
            </label>
            <input
              type="text"
              id="street"
              name="address.street"
              value={updatedUser.address.street}
              onChange={handleInputChange}
              className="input-field"
            />
            <label htmlFor="suite" className="mb-1">
              Suite:
            </label>
            <input
              type="text"
              id="suite"
              name="address.suite"
              value={updatedUser.address.suite}
              onChange={handleInputChange}
              className="input-field"
            />
            <label htmlFor="city" className="mb-1">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="address.city"
              value={updatedUser.address.city}
              onChange={handleInputChange}
              className="input-field"
            />
            <label htmlFor="zipcode" className="mb-1">
              Zipcode:
            </label>
            <input
              type="text"
              id="zipcode"
              name="address.zipcode"
              value={updatedUser.address.zipcode}
              onChange={handleInputChange}
              className="input-field"
            />
            {/* Add more input fields as needed */}
          </div>
        </div>
      )}
      <Link to= "/" >
        <button
          onClick={updateUserDetails}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Update Details
        </button>
      </Link>
    </div>
  );
};

export default UserDetailPage;

