import React, { useState, useEffect } from 'react'
import { fetchBatmanMovies } from '../services/fetchBatmanMovies'
import { useParams } from 'react-router-dom'
import '../styles/BatmanMovies.css'

export default function BatmanMovieDetail() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { name } = useParams()
  useEffect(() => {
    fetchBatmanMovies().then((res) => {
      setData(res)
    })
    fetchBatmanMovies().finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return 'Loading...'
  const selectedMovie = data.filter((x) => x.show.name === name)[0]
  console.log({ selectedMovie })
  return (
    <div>
      <div className="grid">
        <div className="card card-horizontal">
          <div className="card-detail"></div>
          <img src={selectedMovie.show.image.medium} />
          <div className="body">
            <div className="wrap">
              <h3 className="title">{selectedMovie.show.name}</h3>
              <div className="excerpt">{selectedMovie.show.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
