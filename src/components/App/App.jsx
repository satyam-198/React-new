import { useState, useEffect } from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Utils from '../Utils/Utils'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import Login from '../Login/Login'
// import Register from '../register.component';

const App = () => {
	const [token, setToken] = useState(null)
	const [valid, setValid] = useState(false)

	useEffect(() => {
		const token_val = localStorage.getItem('token')
		if (token_val) {
			const url = `${process.env.REACT_APP_BACKEND_URL}/checkValidity`

			axios
				.get(url, {
					headers: {
						Authorization: `Basic ${token_val}`,
					},
				})
				.then((res) => {
					if (res.data.message === 'Token Valid') {
						setValid(true)
						setToken(token_val)
						console.log('valid')
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
		// if (Utils.checkTokenValidity()) {
		//     console.log("valid")
		// }
	}, [])

	return (
		// <Utils.GlobalContextProvider>
		<div className='App'>
			<Nav />
			<div className='auth-wrapper'>
				<div className='auth-inner'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<Home
									token={token}
									setToken={setToken}
									valid={valid}
									setValid={setValid}
								/>
							}
						/>
						<Route
							exact
							path='/login'
							element={
								<Login
									token={token}
									setToken={setToken}
									valid={valid}
									setValid={setValid}
								/>
							}
						/>
						{/* <Route exact path="/register" component={Register} /> */}
					</Routes>
				</div>
			</div>
		</div>
		// </Utils.GlobalContextProvider>
	)
}

export default App
