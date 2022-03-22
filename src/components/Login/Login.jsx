import axios from 'axios'
import { useState } from 'react'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			email: email,
			password: password,
		}

		axios
			.post('http://localhost:8000/login', data)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<h3>Login</h3>

			<div className='form-group'>
				<label>Email</label>
				<input
					type='email'
					className='form-control'
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div className='form-group'>
				<label>Password</label>
				<input
					type='password'
					className='form-control'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button className='btn btn-primary btn-block'>Login</button>
		</form>
	)
}

export default Login
