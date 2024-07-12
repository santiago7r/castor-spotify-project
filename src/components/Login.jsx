

const CLIENT_ID = "24281df7919147f0ac20dd7953cf01e1"
const REDIRECT_URI = "http://localhost:5173/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const Login = () => {

    return (
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        Login to Spotify
        </a>
    )
}

export default Login