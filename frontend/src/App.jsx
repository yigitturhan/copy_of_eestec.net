import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Partners from "./components/Partners";
import Cities from "./components/Cities";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/cities" element={<Cities />} />
        </Routes>
    );
}

export default App;
