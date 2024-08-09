import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth'
import { login,logout } from './store/authslice'
import { Header,Fotter } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setloading] = useState(true)
  const dispatch=useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
       dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>{
      setloading(false)
    })
  }, [third])
  return loading ? (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-500'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Fotter/>
    </div>
  ) : (null)
}

export default App
