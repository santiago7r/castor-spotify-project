import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const CLIENT_ID = "24281df7919147f0ac20dd7953cf01e1"
  const REDIRECT_URI = "http://localhost:5173/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

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
          <header className="App-header">
              <h1>Spotify Project</h1>
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
          </header>
      </div>
  );
}

export default App;
