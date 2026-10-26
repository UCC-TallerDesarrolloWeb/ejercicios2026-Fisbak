import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import '@styles/index.css'
import Login from "@pages/Login.jsx";
import Activities from "@pages/Activities.jsx";
import Home from "@pages/Home.jsx";
import Layout from "./Layout.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/activities" element={<Activities />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
