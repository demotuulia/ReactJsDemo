/**
 * App as router
 * 
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./pages/Layout/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";

function App() {

  return (
    <>
            <BrowserRouter  basename="/">
              <Routes>
              <Route path="/" element={<Layout />}>
                <Route index  element={<HomePage />} />
                <Route path="demo" element={<UsersPage/>}/>
                <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>       
            </BrowserRouter>
    </>
  );
}

export default App