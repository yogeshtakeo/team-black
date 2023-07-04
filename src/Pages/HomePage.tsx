// import React from 'react'
import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/card";
import { ModelContext } from "../Context/ModelContext";
function HomePage() {
  const {
    navDestinations: { status, updateStatus },
  } = useContext(ModelContext);

  return (
    <>
      <div className="bg  relative w-full h-screen">
        <div className=" z-10 fixed top-0 left-0 right-0 z-index-100 bg-black/60 w-full  ">
          <NavBar />
        </div>
        <main className="z-1 w-full h-full">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div className="w-96 h-52 border border-slate-300 border-1 backdrop-blur flex flex-col items-center justify-center text-white">
              <p className="text-xl">Welcome</p>
              <p className="text-base">Lets Explore...</p>
            </div>
          </div>
        </main>

        <div className=" z-10 fixed bottom-0 left-0 right-0 bottom-0 w-full">
          <Footer />
        </div>
        {status && <Card />}
      </div>
    </>
  );
}

export default HomePage;
