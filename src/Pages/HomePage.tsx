// import React from 'react'
import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/navi-bar";
import Card from "../components/card";
import { ModelContext } from "../Context/ModelContext";
function HomePage() {
  const {
    navDestinations: { status, updateStatus },
  } = useContext(ModelContext);

  return (
    <>
      <div className="bg">
        <div className="h-screen bg-black/60">
          <div className=" z-10 fixed top-0 left-0 right-0 z-index-100 w-full  ">
            <NavBar />
          </div>
          <div className="p-1">
            <main className=" w-full h-screen">
              <div className="flex items-center justify-center flex-col w-full h-screen">
                <div className="bg-slate-100/5 w-96 h-52 rounded border border-slate-300/5 border-1 backdrop-blur flex flex-col items-center justify-center text-white">
                  <p className="text-xl">Welcome</p>
                  <p className="text-base">Lets Explore...</p>
                </div>
              </div>
            </main>
          </div>

          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
