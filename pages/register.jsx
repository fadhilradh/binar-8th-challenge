import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import InputField from '../components/InputField'
import { NavBar } from '../components/index'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const router = useRouter()
  const MySwal = withReactContent(Swal)

  async function register(event) {
    event.preventDefault()
    try {
      await axios.post('http://localhost:5000/register', {
        username: username,
        email: email,
        password: password,
      })
      MySwal.fire({
        icon: 'success',
        title: 'Register Successful',
        text: 'Please login using your username and password',
      })
      router.push('/login')
    } catch (err) {
      console.error(err.response)
      console.error(err.message)

      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
      })
    }
  }

  return (
    <>
      <NavBar cname=" max-w-screen-2xl w-full mx-auto" onlyLogo />
      <div className="h-[calc(100vh-64px)] max-w-screen-2xl mx-auto bg-sysreq bg-cover flex justify-center items-center bg-black">
        <form
          onSubmit={(event) => register(event)}
          className="flex flex-col justify-around gap-y-5 p-10 w-5/6 max-w-[25rem] sm:w-[25rem] bg-carousel bg-cover rounded-xl shadow-2xl border-2 border-gray-500"
        >
          <p className="text-white text-3xl text-primary text-center">
            Register
          </p>
          <InputField
            label="Username"
            type="text"
            placeholder="Fill your username"
            value={username}
            handleChange={(event) => setUsername(event.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            handleChange={(event) => setEmail(event.target.value)}
          />

          <div className="flex flex-col gap-x-3 mt-0">
            <InputField
              label="Password"
              type="password"
              placeholder="Password (min 6 characters)"
              pattern=".{6,}"
              title="Password should be at least 6 characters"
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
            />
            <div className="flex items-center gap-x-2 mt-1">
              <input
                id="checkbox"
                type="checkbox"
                value={isPasswordVisible}
                onChange={() =>
                  setIsPasswordVisible(
                    (isPasswordVisible) => !isPasswordVisible
                  )
                }
              />
              <p className="text-md text-primary">Show Password</p>
            </div>
          </div>

          <button className="base-button mx-auto" type="submit">
            Register
          </button>
          <p className="text-primary text-center">
            Already registered? &nbsp;
            <a className="underline" href="/login">
              Login here
            </a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Register
