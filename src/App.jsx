import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Url from './components/Url'
import img from './assets/rickAndMorty.jpg'

function App() {
  const [data, setData] = useState({})
  const [typeId, setTypeId] = useState("")
  const randomId = Math.floor(Math.random()*126)+1;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then((res) => setData(res.data));
  }, [])

  function search(){
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then((res) => setData(res.data));
  }

  console.log(data)

  return (
    <>
      <div>
        <img className='img-nav' src={img} alt="" />
      </div>
      <h1>{data.name}</h1>
      <div className="planet-data">
        <p>Type: {data.type}</p>
        <p>Dimension: {data.dimension}</p>
        <p>Population: {data.residents?.length}</p>
      </div>
      <input placeholder='Type id to search' type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)}/>
      {
        typeId > 126 ? (
          <button onClick={search} disabled>Search</button>
        ) :
          <button onClick={search}>Search</button> 
      }
      <div className='characters-container'>
      {
        data.residents?.map((url)=>(
          <Url url={url} key={url}/>
        ))
      }
      {/* <Url key={data.url} url={data.residents}/> */}
      </div>
    </>
  )
}

export default App
