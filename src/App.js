import MovieList from "./component/MovieList";
import StyledApp from "./StyledApp.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFavourite from "./component/AddFavourite";

const App = () => {
  return (
    <StyledApp>
      <nav>
        <div className="app-logo">MyTestApp</div>
      </nav>
      <header>
        <div className="header-title">
          <p className="f-w-700 f-s-72">Watch something incredible.</p>
        </div>
      </header>
      <main>
        <div className="container-fluid movie-app">
          <div className="row">
            <MovieList AddFavouriteComponent={AddFavourite} />
          </div>
        </div>
      </main>
    </StyledApp>
  );
};

export default App;
