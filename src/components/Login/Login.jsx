import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Utils from '../Utils/Utils'

const Login = ({ token, setToken, valid, setValid }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const [valid, setValid] = useState(false)

	const routeHistory = useNavigate()
	// const { token, setToken } = Utils.useTokenState()

	// const { token, setToken } = Utils.useTokenState()

	// useEffect(() => {
	// 	if (Utils.checkTokenValidity(token, setToken)) {
	// 		console.log('Already logged in!')
	// 		// return (
	// 		// 	<Navigate
	// 		// 		to={{
	// 		// 			pathname: '/',
	// 		// 		}}
	// 		// 	/>
	// 		// )
	// 		setValid(true)
	// 	}
	// }, [token, setToken])

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			usr: email,
			pwd: password,
		}

		const url = `${process.env.REACT_APP_BACKEND_URL}/login`

		console.log(url)

		axios
			.post(url, data)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				setToken(res.data.token)
				console.log(token)
				setValid(true)
				routeHistory('/')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return valid ? (
		<Navigate
			to={{
				pathname: '/',
			}}
		/>
	) : (
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
