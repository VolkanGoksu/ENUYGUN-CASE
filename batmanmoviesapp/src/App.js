import React, { useState, useEffect } from 'react'
import { fetchBatmanMovies } from './services/fetchBatmanMovies'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBatmanMovies().then((res) => {
      setData(res)
    })
    fetchBatmanMovies().finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return 'Loading...'

  console.log(data)

  return (
    <div>
      {data.map((x) => (
        <h2>{x.score}</h2>
      ))}
    </div>
  )
}

export default App
