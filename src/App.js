import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import "./assets/styles/main.scss"
import { MovieId } from "./components/movieid/MovieId";
import { MovieIdPerson } from "./components/movieidperson/MovieIdPerson";
import { TopRated } from "./pages/topRated/TopRated";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<About />} />
        <Route path="/movie-page/:movieId" element={<MovieId/>}/>
        <Route path="/casts/:movieId" element={<MovieIdPerson/>}/>
      </Routes>
    </>
  );
}

export default App;
