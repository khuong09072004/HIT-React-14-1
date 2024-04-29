import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Login from './components/Login/Login'
import CurdProducts from './components/CurdProducts/CurdProducts'
import Blog from './components/Blog/Blog'
import Register from './components/Register/Register'
import UserProfile from './components/UserProfile/UserProfile'
import Home from './page/Home/Home'
import AboutUs from './page/AboutUs/AboutUs'
import Contact from './page/Contact/Contact'
import { Route,Routes,Link ,NavLink} from 'react-router-dom'
import { RiH1 } from 'react-icons/ri'
import './styles/index.scss'





function App() {
 const login =localStorage.getItem('login1');
 console.log(login);




 

  return (
    <>
  

    
    {/* <CurdProducts/> */}
    {/* <h1>{login ?"da login":"chua login"}</h1> */}
    {/* <Login/> */}
    {/* <Blog/> */}
    {/* <Register/> */}
    {/* <UserProfile/> */}

    {/* <nav>
      <ul>
        <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} >Home</NavLink></li>
        <li><NavLink to="/about-us" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/contact"  className={({isActive}) => isActive ? 'active': ''}>Contact</NavLink></li>
        <li><NavLink to="/login" className={({isActive})=>isActive? 'active': ''}>Login</NavLink></li>
      </ul>
    </nav> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<h1>404</h1>} />
     
    </Routes>
    
    
    </>
  )
}

export default App;
