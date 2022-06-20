import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./functional component/Navbar";
import News from "./functional component/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="All" />} />
          <Route path="/politics" element={<News category="politics" />} />
          <Route path="/education" element={<News category="education" />} />
          <Route path="/technology" element={<News category="technology" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/covid19" element={<News category="covid19" />} />
          <Route path="/crime" element={<News category="crime" />} />
          <Route path="/jokes" element={<News category="jokes" />} />
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
