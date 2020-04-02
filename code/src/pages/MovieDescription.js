import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'


export const MovieDescription = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=34d4221efb441d76ee99051efaa0994f&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [movieId])

  return (
    <section style={{ backgroundImage: `url("http://image.tmdb.org/t/p/w1280${movies.backdrop_path}")` }}>
      <NavLink to="/" exact> <span role="img" aria-label="arrow">&#9666;</span> <p>Back</p> </NavLink>
      <div>
        <img src={`http://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={`${movies.title} cover`} />
      </div>
      <div>
        <h1> {movies.title} </h1>
        <p> {movies.overview} </p>
        <h2> {movies.tagline} </h2>
      </div>
      <div>
        <h3><span role="img" aria-label="star">&#11088;</span> {movies.vote_average}/10 based on {movies.vote_count} votes</h3>
      </div>

    </section>


  )
}