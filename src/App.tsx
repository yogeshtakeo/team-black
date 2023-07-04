import LoginPage from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/register/RegisterPage";
import HomePage from "./Pages/HomePage";
import { ModelContextProvider } from "./Context/ModelContext";

function App() {
  return (
    <ModelContextProvider>
      <Routes>
        <Route path="/Register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
      </Routes>
    </ModelContextProvider>
  );
}

export default App;
