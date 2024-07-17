import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './components/Details'

function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

  const Home = () => (
    <div>
      <h1 style={{color: "#1DB954"}}>Spotify Project</h1>
        {!token ?
          <Login />
          : <>
            <button onClick={logout}>Logout</button>
            <Search token={token} />
          </>
      }
    </div>)

  const NoMatch = () => (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
  return (      
  <Routes>
    <Route path="">
      <Route index element={<Home />} />
      <Route path="/details/:type/:id" element={<Details />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  );
}

export default App;
