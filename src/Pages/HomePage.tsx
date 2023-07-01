import React from 'react'

import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className='w-full h-screen bg-[url("https://media.istockphoto.com/id/472903174/photo/buddhist-stupa-tengboche-monastery-overlooked-by-everest-himalaya-mountains-nepal.jpg?s=612x612&w=0&k=20&c=2UBQXm4crAvDz6oRr4oENGQdNZgzoxAe5l34Qjj_3yw=")] bg-cover '>
      <Navbar />
      <div className='  flex items-center justify-center mt-56'> 
      <div className='w-96 h-52 border border-slate-300 border-1 backdrop-blur flex flex-col items-center justify-center text-white'>
      <p className='text-xl'>Welcome</p>
      <p className='text-base'>Lets Explore...</p>
      </div>
      </div>

    </div>
  )
}

export default HomePage