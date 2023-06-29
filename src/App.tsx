import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeComponent from "./components/Homepage.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Welcome </h1>
      <HomeComponent />
    </>
  );
}

export default App;
