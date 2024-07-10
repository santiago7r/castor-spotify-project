import { useState } from 'react';
import './App.css';

function App() {
  const [track, setTrack] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    if(track.trim() === '') {
      alert('You should type something');
      return
    }
    console.log(track);
    setTrack('');
  }

  return (
    <>
      <h1>Spotify Castor</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={track} onChange={e => setTrack(e.target.value)} />
        <button type='submit'>Search</button>
        <button type='button'>Sign In to Spotify</button>
      </form>
    </>
  )
}

export default App
