import axios from "axios"
import { useState } from "react"
import CardGroup from "./CardGroup/CardGroup"


// eslint-disable-next-line react/prop-types
const Search = ({ token }) => {

  const [searchKey, setSearchKey] = useState("")

  const [data, setData] = useState({})

  const searchArtists = async (e) => {
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

  const mapSongs = ({ tracks }) => tracks && tracks.items.map(({name, artists, album: {images: [img]}}) => ({
    img: img.url,
    mainText: name,
    subText: artists[0].name
  }))

  const mapArtists = ({ artists }) => artists && artists.items.map(({name, genres: [genre], images: [img]}) => ({
    img: img.url,
    mainText: name,
    subText: genre
  }))

  const mapAlbuns = ({ albums }) => albums && albums.items.map(({name, artists: [artist], images: [img]}) => ({
    img: img.url,
    mainText: name,
    subText: artist.name
  }))

  return (
    <>
        <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>
        <CardGroup cardItems={mapSongs(data)} title="Songs" top/>
        <CardGroup cardItems={mapArtists(data)} title="Artists" top/>
        <CardGroup cardItems={mapAlbuns(data)} title="Albuns" top/>
    </>
  )

}

export default Search