import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MoviesSearch from "./pages/MoviesSearch"; // cambiar a globl import
import MovieDetails from "./pages/MovieDetails";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-yellow-50">
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/movies" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
