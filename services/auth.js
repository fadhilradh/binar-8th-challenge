import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export async function login(router) {
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
    console.error(err)
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    })
  }
}
