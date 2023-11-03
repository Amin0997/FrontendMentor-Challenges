import './App.css'
import Subscribe from './components/Subscribe'
import SuccessfulSubscribing from './components/SuccessfulSubscribing'
import { Routes,Route } from 'react-router-dom'

function App() {

	return (
		<Routes>
			<Route path='/' element={<Subscribe />} />
			<Route path='/successfulSubscribing' element={<SuccessfulSubscribing />} />
		</Routes>
	)
}

export default App
