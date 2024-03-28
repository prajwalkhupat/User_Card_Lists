// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { fetchUsers } from "./Api/User";
// import { useEffect, useState } from "react";
// import DetailsPage from "./Components/DetailsPage";
// import Cards from "./Components/Cards";
// import NavBar from "./Components/NavBar";

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchUsers()
//       .then((users) => {
//         setData(users);
//         console.log("users", users);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/user/:id" element={<DetailsPage />} />
//         <Route path="/" element={<Cards data={data} />} />
//       </Routes>
//     </Router>
//   );
// }



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchUsers } from "./Api/User";
import DetailsPage from "./Components/DetailsPage";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setData(users);
        console.log("users", users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/user/:id" element={<DetailsPage data={data} />} /> {/* Route for the detail page */}
        <Route path="/" element={<Cards data={data} />} />
      </Routes>
    </Router>
  );
}
