// import axios from 'axios'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
// import Utils from '../Utils/Utils'

const Home = ({ token, setToken, valid, setValid }) => {
	// const { token, setToken } = Utils.useTokenState()
	// useEffect(() => {
	//     if (!Utils.checkTokenValidity(token, setToken)) {
	// 		setValid(false)
	// 	}
	// }, [token, setToken])

	return valid ? (
		<h2>You are logged in!</h2>
	) : (
		<Navigate
			to={{
				pathname: '/login',
			}}
		/>
	)
}

export default Home
