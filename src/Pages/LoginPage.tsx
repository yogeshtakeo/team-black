import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'





function LoginPage() {
    const navigate = useNavigate()
    



    const initialValues = {
        email: '',
        password:''
    }

    const validationSchema = Yup.object({
      email:Yup.string().required('Enter Email'),
      password:Yup.object().required('Enter Password')
    })

  function submitHandler(){
    console.log('submit')
  }


  return (
    <>
    <div className='h-100 bg-[url("https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  '>
    <div className='w-full max-w-xs'>
    <Formik initialValues ={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
      <Form  className=' mx-35 my-9 pt-6gap-4 p-20 w-50 h-50 bg-white/9 backdrop-blur-lg rounded drop-shadow-lg'>
          <input
                  
                  type = 'email'
                  name = 'email'
                  placeholder = 'Enter Email'
          />
          <input
                  type = 'password'
                  name = 'password'
                  placeholder = 'Enter Password'
          />
          <button type="submit">
            <Link to ="/HomePage">SIGN IN</Link>
          </button>

      </Form>
      


    </Formik>
    </div>
    </div>
    </>
  )
}

export default LoginPage