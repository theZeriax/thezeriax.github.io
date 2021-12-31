import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Redirect from "./pages/Redirect";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import PageFound from "./pages/PageFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="redirect" element={<Redirect />} />
        <Route path="404" element={<PageFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
