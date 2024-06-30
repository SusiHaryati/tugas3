
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
