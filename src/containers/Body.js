import {Outlet} from "react-router-dom";
import React from "react";
import FloatingMenu from "../components/FloatingMenu";

export function Body() {
    return <div className="content">
        <Outlet/>
        <FloatingMenu/>
    </div>
}