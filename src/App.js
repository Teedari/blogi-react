import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
