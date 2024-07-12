import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';

function App() {

  const [token, setToken] = useState("")
  // const [profileInfo, setProfileInfo] = useState("")

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

  return (
      <div className="App">
              <h1>Spotify Project</h1>
              {!token ?
                <Login />
              : <>
                  <button onClick={logout}>Logout</button>
                  <Search token={token} />
                </>
              }
      </div>
  );
}

export default App;
