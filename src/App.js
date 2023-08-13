import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import TrendingMovie from "./components/pages/TrendingMovie";
import Actor from "./components/pages/Actor";
import DetailsMovie from "./components/detailsMovie/DetailsMovie";
import Series from "./components/pages/Series";
// import SearchMovie from "./components/searchMovie/SearchMovie";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingMovie />} />
        <Route path="/topRated" element={<Series />} />
        <Route path="/actor" element={<Actor />} />
        {/* <Route path="/searchMovie" element={<SearchMovie />} /> */}
        <Route path="/movie/:id" element={<DetailsMovie />} />
        <Route path="/series/:id" element={<Series />} />
      </Routes>
    </div>
  );
}

export default App;
