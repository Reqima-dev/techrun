import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Project from "./pages/Project";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter basename="/techrun">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
