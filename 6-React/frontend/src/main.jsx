import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import '@styles/index.css'
import Login from "@pages/Login.jsx";
import Activities from "@pages/Activities.jsx";
import Home from "@pages/Home.jsx";
import Layout from "./Layout.jsx";
import Poke from "@pages/Poke.jsx";
import Poke2 from "@pages/Poke2.jsx";
import Store from "@pages/Store.jsx";
import Cart from "@pages/Cart.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/poke" element={<Poke />} />
                    <Route path="/poke2" element={<Poke2 />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
