// import React from 'react'

function NavBar() {
  return (
    <>
        <nav className="bg-slate-500/10 backdrop-blur-sm">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">

      <div className="flex flex-1 items-center justify-between">
       
      <div className="flex items-center">
            <img className="h-11 w-auto rounded-full" src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=1000" alt="Your Company"/>
            <div><div className="flex">
                <h1 className="flex justify-center text-slate-300 font-bold text-2xl text-rose-200 pl-2 pr-1">Travel</h1> <p className="flex justify-center text-slate-300 font-bold text-sm text-slate-100 items-center"> to</p><h1 className="flex pl-1 justify-center text-slate-300 font-bold text-2xl text-rose-200"> Nepal</h1>
                </div>
                <p className="flex justify-center text-slate-300 font-bold text-sm text-slate-100 pl-2"> Your favourite guide to the Himalayas!</p>
            </div>
        </div>
        <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md">
          <p>&nbsp;</p>
          <input type = 'text' name = 'search' placeholder = 'Search...' className='ml-2 l-2 outline-none border-none bg-slate-100/0 text-slate-300'/>
          </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">My Trips</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Meet the Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Activities</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Destinations</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        
        
      </div>
          </div>

      </div>
      
    </div>
  </div>
  </div>
</nav>

    
    </>
  )
}

export default NavBar