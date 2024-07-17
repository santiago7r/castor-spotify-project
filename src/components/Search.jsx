import axios from "axios"
import { useState } from "react"
import CardGroup from "./CardGroup/CardGroup"
import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Search = ({ token }) => {

  const [searchKey, setSearchKey] = useState("")
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const search = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            limit: 8,
            q: searchKey,
            type: "track,artist,album"
        }
    })

    setData(data)
    console.log(data)
  }

  const generateHandleOnClick = (type, id) => (e) => {
    e.stopPropagation();
    navigate(`/details/${type}/${id}`)
  }

  const mapSongs = ({ tracks }) => tracks && tracks.items.map(({name, artists, album: {images: [img]}, id}) => ({
    img: img?.url,
    mainText: name,
    subText: artists[0].name,
    handleOnClick: generateHandleOnClick('tracks', id)
  }))

  const mapArtists = ({ artists }) => artists && artists.items.map(({name, genres: [genre], images: [img], id}) => ({
    img: img?.url,
    mainText: name,
    subText: genre,
    handleOnClick: generateHandleOnClick('artists', id)
  }))

  const mapAlbuns = ({ albums }) => albums && albums.items.map(({name, artists: [artist], images: [img], id}) => ({
    img: img?.url,
    mainText: name,
    subText: artist.name,
    handleOnClick: generateHandleOnClick('albums', id)
  }))

  return (
    <div>
        <form onSubmit={search}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>
        <CardGroup cardItems={mapSongs(data)} title="Songs" top/>
        <CardGroup cardItems={mapArtists(data)} title="Artists" top/>
        <CardGroup cardItems={mapAlbuns(data)} title="Albuns" top/>
    </div>
  )

}

export default Search