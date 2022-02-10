import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import ReadArticle from "./pages/ReadArticle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/posts/:ID" element={<PostDetail />} />
          <Route path="/post/read" element={<ReadArticle />} />
          <Route path="*" element={<>WRONG URL</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
