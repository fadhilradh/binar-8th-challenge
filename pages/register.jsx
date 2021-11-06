import { useState } from 'react'
import InputField from '../components/InputField'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="h-screen container mx-auto flex justify-center items-center bg-black">
      <form className="flex flex-col items-center justify-around space-y-5 p-16 bg-gray-900 rounded-lg border-2 border-gray-500">
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

        <button className="auth-button" type="submit">
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
