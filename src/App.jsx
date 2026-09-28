import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import MainRouter from './mainRouter.jsx'

function App() {
  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  )
}

export default App
