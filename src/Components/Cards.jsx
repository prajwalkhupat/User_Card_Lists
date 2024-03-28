
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InitialsImage from "./InitialImage";

const Cards = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter data based on search query
  const filterData = () => {
    return data.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Event handler to update search query state
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2 className="m-10 font-bold text-2xl">
        <div className="m-10">User Card Lists</div>
      </h2>
      <div className="h-screen flex items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="p-2 border border-gray-300 rounded-md w-500"
        />
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 m-10">
        {filterData().map((user, key) => (
          <div className="flex ml-10" key={key}>
            <div className="mr-4">
              <InitialsImage name={user.name} />
            </div>
            <div className="w-40 mr-10">
              <p className="font-bold">{user.name}</p>
              <p className="font-normal text-blue-600">{user.email}</p>
              <p>Company: {user.company.name}</p>
            </div>
            <div className="flex justify-end ml-10">
              <div className="w-50 ">
                <p className="font-medium">Phone: {user.phone}</p>
                <p>
                  Website:{" "}
                  <a
                    className="font-normal text-blue-600"
                    href={`http://${user.website}`}
                  >
                    {user.website}
                  </a>
                </p>
                <Link to={`/user/${user.id}`}>
                  <div
                    className="border border-black hover:bg-grey-700 text-black font-bold py-1 px-2 rounded-full"
                    style={{ width: "130px" }}
                  >
                    <span className="ml-6 flex">
                      {" "}
                      Details
                      <svg
                        className="ml-6"
                        width="20px"
                        height="28px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
