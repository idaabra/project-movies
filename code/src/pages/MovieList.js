import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=34d4221efb441d76ee99051efaa0994f&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img src={` https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h3> <span role="img" aria-label="star">&#11088;</span> {movie.vote_average}/10</h3>
          </Link>
        </div>

      ))}
    </div>
  )
}