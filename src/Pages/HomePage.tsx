// import React from 'react'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
function HomePage() {
  return (
    <>
      <div className="bg w-100 h-screen">
        <div className="bg-black/60">
          <NavBar />
          </div>
          <div className='  flex items-center justify-center mt-56'>
        <div className='w-96 h-52 border border-slate-300 border-1 backdrop-blur flex flex-col items-center justify-center text-white'>
          <p className='text-xl'>Welcome</p>
          <p className='text-base'>Lets Explore...</p>
        </div>

        
          <div className="absolute bottom-0 w-full"> 
          <Footer /></div>
        </div>
        </div>
      
    </>
  );
}

export default HomePage;
