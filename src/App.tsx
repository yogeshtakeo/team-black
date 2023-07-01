import LoginPage from "./Pages/LoginPage";
import {Routes, Route} from 'react-router-dom'
import RegisterPage from './Pages/register/RegisterPage'
import HomePage from "./Pages/HomePage";



function App() {

  

  return (
    <>
      <Routes>
          <Route path="Register" element={<RegisterPage/>}></Route>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="HomePage" element={<HomePage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
