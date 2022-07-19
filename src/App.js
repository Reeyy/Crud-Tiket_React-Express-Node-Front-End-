import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";
import AddTiket from "./components/AddTiket";
import TiketList from "./components/TiketList";
import EditTiket from "./components/EditTiket";
import About from "./components/About";
import Pricing from "./components/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/list" element={<TiketList />} />
      <Route path="/addtiket" element={<AddTiket />} />
      <Route path="list/edit/:id" element={<EditTiket />} />
      <Route path="/Pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
