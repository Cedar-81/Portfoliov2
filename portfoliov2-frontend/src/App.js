import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Containers/home";
import Blog from "./Containers/blog";
import Navmobile from "./Components/navmobile";
import Topnavmobile from "./Components/topnavmobile";
import Blogdetail from "./Containers/blogdetail";

const App = () => {
  return (
    <>
      <Topnavmobile />
      <div className="2xl:container mx-auto" divdiv>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id/:slug" element={<Blogdetail />} />
        </Routes>
      </div>
      <div className="md:hidden">
        <Navmobile />
      </div>
    </>
  );
};

export default App;
