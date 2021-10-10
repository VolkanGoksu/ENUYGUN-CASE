import { Route, BrowserRouter } from 'react-router-dom'
import BatmanMovies from './../components/BatmanMovies'
import BatmanMovieDetail from '../components/BatmanMovieDetail'
export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={'/'} component={BatmanMovies} exact  />
          <Route path={'/movie-detail/:name'} component={BatmanMovieDetail}  />
        </div>
      </BrowserRouter>
    </div>
  )
}
