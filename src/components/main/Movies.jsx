/* eslint-disable react/prop-types */
export function MovieCard({ key, movie }) {
  return (
    <li key={key}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export function MoviesList({ movies }) {
  return (
    <ul className="list">
      <>
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </>
    </ul>
  );
}
