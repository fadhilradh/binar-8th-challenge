import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import InputField from '../components/InputField'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <div className="h-screen container mx-auto bg-carousel bg-cover flex justify-center items-center bg-black">
      <form
        onSubmit={(event) => register(event)}
        className="flex flex-col items-center justify-around space-y-5 p-16 bg-sysreq bg-cover rounded-xl shadow-2xl border-2 border-gray-500"
      >
        <p className="text-white text-3xl text-primary">Register</p>
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
        <InputField
          label="Password"
          type="password"
          placeholder="Password (min 6 characters)"
          pattern=".{6,}"
          title="Password should be at least 6 characters"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
        />

        <button className="base-button" type="submit">
          Register
        </button>
        <p className="text-primary">
          Already registered? &nbsp;
          <a className="underline" href="/login">
            Login here
          </a>
        </p>
      </form>
    </div>
  )
}

export default Register
