import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'


export const MovieDescription = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=34d4221efb441d76ee99051efaa0994f&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [movieId])

  if (!movie) {
    return <></>
  }

  return (
    <section style={{ backgroundImage: `url("http://image.tmdb.org/t/p/w1280${movie.backdrop_path}")` }}>
      <NavLink to="/" exact> <span role="img" aria-label="arrow">&#9666;</span> <p>Back</p> </NavLink>
      <div>
        <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`${movie.title} cover`} />
      </div>
      <div>
        <h1> {movie.title} </h1>
        <p> {movie.overview} </p>
        <h2> {movie.tagline} </h2>
      </div>
      <div>
        <h3><span role="img" aria-label="star">&#11088;</span> {movie.vote_average}/10 based on {movie.vote_count} votes</h3>
      </div>

    </section>


  )
}