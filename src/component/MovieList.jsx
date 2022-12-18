import React, { useCallback, useEffect, useState } from "react";
import { StyledMovieList } from "./StyledMovieList.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchField from "./SearchField";

const MovieList = (props) => {
  const AddFavouriteComponent = props.AddFavouriteComponent
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState([])

  const getMovieData = useCallback(async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d15f88f3`;

    const response = await fetch(url);
    const dataResponse = response.json();
    dataResponse.then((data) => {
      if (data.Search) {
        setMovies(data.Search);
      }
    });
  }, []);

  useEffect(() => {
    getMovieData(searchValue);
  }, [searchValue, getMovieData]);

  const addFavouriteMovie = (movie) => {
    console.log(movie);
  }

  return (
    <StyledMovieList>
      <section>
        <div className="searchField">
          <SearchField
            label={"Search"}
            type="text"
            placeholder={"Enter Movie Name"}
            onchange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="seachField"
          />
        </div>
      </section>
      <section>
        <h2>Movies</h2>
        <div className="d-flex">
          {movies.map((movie, idx) => (
            <div onClick={addFavouriteMovie} key={idx} className="m-2 imageContainer movie">
              <img src={movie.Poster} alt="movie" />
              <div className="overlay d-flex align-items-center justify-content-center">
                <AddFavouriteComponent />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="favourite">
            <h2>Favourites</h2>
      </section>
    </StyledMovieList>
  );
};

export default MovieList;
