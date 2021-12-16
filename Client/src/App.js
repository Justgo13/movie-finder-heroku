import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MovieSearch from "./Search/pages/MovieSearch";
import SearchResult from "./SearchResults/pages/SearchResult";

import "bootstrap/dist/css/bootstrap.css";
import "./Search/styles/SearchStyles.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="movie-search" element={<MovieSearch />}/>
        <Route path="movie-search/results/:movieName" element={<SearchResult/>}/>

        {/* <Route path="actor-search" element={<ActorSearch />}/>
        <Route path="actor-search/results" element={<SearchResult/>}/>

        <Route path="genre-search" element={<GenreSearch />}/>
        <Route path="genre-search/results" element={<SearchResult/>}/>

        <Route path="year-search" element={<YearSearch />}/>
        <Route path="year-search/results" element={<SearchResult/>}/> */}
        <Route path="*" element={<Navigate replace to="/movie-search" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
