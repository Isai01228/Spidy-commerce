import {getAllSuits} from './services/suitsServices.js'
import React, {useState} from 'react'
// import SuitsInfo from './components/suitComponent.jsx'
// import SuitButton from './components/SuitButtonTest.jsx'
import LoginPage from './pages/login/LoginPage'
import {login} from './services/usersService'

const App = () => {
const [suit, setSuit] = useState([])
const [cuenta, setcuenta] = useState([])

const loginCunt = async () => {
  const userLogin = await login('daniel@mail', '12345')
  console.log(userLogin)
  setcuenta(cuenta)
}

  const getSuits= async() => {
  const suits = await getAllSuits()
  console.log(suits)
  setSuit(suit)
}

  return(
    <>
      <h1>app page</h1>
      <button type='submit' onClick={getSuits}  > suits</button>
      <button type='submit' onClick={loginCunt} >login </button>
      <LoginPage/>
      {/* <SuitButton getSuits= {getSuits} />
      <SuitsInfo suit={suit} /> */}

    </>
  )
}

export default App