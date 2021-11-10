import axios from 'axios'
import router from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export async function register(username, email, password) {
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
