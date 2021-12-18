import * as React from "react";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import {TOC} from "../components/TOC";
import Book from "../components/Book";
import Stats from "../components/Stats";

export default function BookRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/bhagavad-gita" element={<TOC/>} />
            <Route path="/bhagavad-gita/stats" element={<Stats/>} />
            {
                Array(18).fill(1)
                    .map((item, i) => i + 1)
                    .map(item =>
                        <Route key={item} path={`/bhagavad-gita/${item}`} element={<Book chapter={item}/>}/>
                    )
            }
        </Routes>
    </BrowserRouter>
}