import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
