import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import LoginPage from './pages/login/LoginPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LoginPage/>} path='/' />
                <Route element={<App/>} path='/app' /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router