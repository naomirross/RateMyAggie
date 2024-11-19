import { NativeRouter, Route, Routes } from 'react-router-native'
import Home from './home'
import Login from './login'
import Search from './search';
import './App.css'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  // these constants will be used later 

  // Native Router is basicially a directory 
  // If you make a new page you have to add a route, so that navigate('/name') will work
  return (
    <div className="App">
      <NativeRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </NativeRouter>
    </div>
  )
}

export default App