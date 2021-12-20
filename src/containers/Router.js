import * as React from "react";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import {TOC} from "../components/TOC";
import Book from "../components/Book";
import Stats from "../components/Stats";
import {Layout} from "./Layout";

export default function BookRouter() {
    return <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<TOC/>}/>
                <Route path="stats" element={<Stats/>}/>
                {
                    Array(18).fill(1)
                        .map((item, i) => i + 1)
                        .map(item =>
                            <Route key={item} path={`/${item}`} element={<Book chapter={item}/>}/>
                        )
                }
            </Route>
        </Routes>
    </BrowserRouter>
}