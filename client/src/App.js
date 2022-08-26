import React, { useEffect, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignInRoute from "./routes/SignInRoute";



function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/welcome" element={<SignInRoute><Welcome /></SignInRoute>}></Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
