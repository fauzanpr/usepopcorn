import { useState } from "react";

/* eslint-disable react/prop-types */
export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function SearchInput() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export function MovieCount() {
  return (
    <p className="num-results">
      Found <strong>X</strong> results
    </p>
  );
}

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchInput />
      <MovieCount />
    </nav>
  );
}
