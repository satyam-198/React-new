// import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Home = (props) => {
	const { setToken, valid, setValid, routeHistory } = props

	const logoutHandler = () => {
		localStorage.removeItem('token')
		setValid(false)
		setToken(null)
		routeHistory('/login')
	}

	return valid ? (
		<>
			<h2>You are logged in!</h2>
			<button
				className='btn btn-primary btn-block'
				onClick={logoutHandler}>
				Log out
			</button>
		</>
	) : (
		<Navigate
			to={{
				pathname: '/login',
			}}
		/>
	)
}

export default Home
