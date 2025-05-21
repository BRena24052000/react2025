import { Routes, Route } from "react-router";
import Home from "../../pages/Home/Home";
import Genres from "../../pages/Genres/Genres";
import New from "../../pages/New/New";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/genres/:id" element={<Genres/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
  );
}

export default Router;
