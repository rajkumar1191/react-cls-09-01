import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddIllustration from "./components/AddIllustration";
import IllustrationList from "./components/IllustrationList";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddIllustration />} />
      <Route path="/illustrations" element={<IllustrationList />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes> */}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddIllustration />} />
          <Route path="/illustrations" element={<IllustrationList />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
