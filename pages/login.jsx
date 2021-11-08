import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import InputField from '../components/InputField'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const MySwal = withReactContent(Swal)

  async function login() {
    try {
      const { data } = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      })
      sessionStorage.setItem('isLogged', true)
      sessionStorage.setItem('user-data', JSON.stringify(data))
      sessionStorage.setItem('token', JSON.stringify(data.token))
      if (data.data.role === 'user') {
        router.push('/')
      } else if (data.role === 'admin') {
        router.push('/dashboard')
      }
      MySwal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `You are redirected to ${
          data.data.role === 'user' ? 'Homepage' : 'Dashboard'
        }`,
      })
    } catch (err) {
      console.error(err.response)
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        textColor: '#FFFFFF',
        background: '#111827',
        confirmButtonColor: '#F59E0B',
        confirmButtonTextColor: 'black',
        text: err.response.data.message || err.response.data,
      })
    }
  }

  return (
    <main className="h-screen max-w-screen-2xl mx-auto bg-carousel bg-cover flex justify-center items-center bg-black">
      <form className="flex flex-col items-center justify-around space-y-5 p-16 bg-sysreq bg-cover rounded-xl shadow-2xl border-2 border-gray-500">
        <p className="text-white text-3xl text-primary mb-3">Login</p>
        <InputField
          placeholder="Enter your username"
          id="username"
          type="text"
          label="Username"
          value={username}
          handleChange={(event) => setUsername(event.target.value)}
        />
        <InputField
          placeholder="Enter your password"
          id="password"
          type="password"
          label="Password"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
        />
        <button className="base-button" type="button" onClick={login}>
          Login
        </button>
        <p className="text-primary">
          Don't have an account ? &nbsp;
          <a className="underline" href="/register">
            Register here
          </a>
        </p>
      </form>
    </main>
  )
}

export default Login
