import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
