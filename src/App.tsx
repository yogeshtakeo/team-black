import LoginPage from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/register/RegisterPage";
import HomePage from "./Pages/HomePage";

import { ModelContextProvider } from "./Context/ModelContext";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <ModelContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/Homepage" element={<HomePage />}></Route>
        <Route path="/Blogpage" element={<BlogPage />}></Route>
      </Routes>
    </ModelContextProvider>
  );
}

export default App;
