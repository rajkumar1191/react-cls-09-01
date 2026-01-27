import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddIllustration from "./components/AddIllustration";
import IllustrationList from "./components/IllustrationList";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./context/ProtectedRoute";
import Login from "./components/Login";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/Home"));
const AddIllustrationPage = lazy(() => import("./components/AddIllustration"));
const IllustrationListPage = lazy(
  () => import("./components/IllustrationList"),
);

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/add" element={<AddIllustrationPage />} />
              <Route path="/illustrations" element={<IllustrationListPage />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
