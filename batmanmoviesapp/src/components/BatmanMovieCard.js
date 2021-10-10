import React, { useState, useEffect } from 'react'
import { fetchBatmanMovies } from './../services/fetchBatmanMovies'
import { Link } from 'react-router-dom'
import '../styles/BatmanMovies.css'
import { useHistory } from 'react-router-dom'
export default function BatmanMovieCard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  let history = useHistory()
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
        <div className="grid">
          <div className="card card-horizontal">
            <img src={x.show.image.medium} />
            <div className="body">
              <div className="wrap">
                <div className="tag">
                  <a href="#">{x.show.id}</a>
                </div>
                <h3 className="title">{x.show.name}</h3>
                <div className="excerpt">
                  {x.show.premiered} && {x.show.ended}{' '}
                </div>
                <div className="action">
                  <a href class="btn "
                    onClick={() => history.push(`movie-detail/${x.show.name}`)}
                  >
                    Show Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};


