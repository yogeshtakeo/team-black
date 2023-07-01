import {useState} from 'react'
import './style.css'
import Footer from '../../components/Footer'
import NavBar1 from '../../components/NavBar1'

function RegisterPage() {

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')



  return (<>
  <div className='bg'>
	<div className='h-full bg-black/60'>
		<NavBar1/>
   <div className=" grid grid-cols-3">
  
		<form className="bg-slate-100/5 mt-10 ml-10 p-10 w-full rounded-md backdrop-blur-sm">
			<h1 className="flex justify-center text-slate-300 font-bold text-2xl text-slate-100 mb-8">Create Account</h1>
			<hr className="h-px my-8 bg-slate-300/30 border-0 dark:bg-gray-700"></hr>

					<div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input value = {email} onChange={event=> setEmail(event.target.value)} className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300" type="email" name="email" id="email" placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input value = {password} onChange={event=> setPassword(event.target.value)} className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300" type="password" name="password" id="password" placeholder="Password" />
      </div>
            <div className="flex mb-8 items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input value = {password2} onChange={event=> setPassword2(event.target.value)} className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300" type="password" name="password2" id="password2" placeholder="Re-enter Password" />
      </div>
							<button type="submit" className="block w-full mt-4 py-2 rounded-md text-slate-300 mb-10 font-semibold mb-2 bg-slate-100/5 hover:bg-slate-100/10">Sign Up</button>
							
		</form>

</div> 
<div><Footer/></div>
</div>
</div>
    </>)
}

export default RegisterPage