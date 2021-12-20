import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";

export function Layout() {
    return (
        <div style={{textAlign: "center"}}>
            <Header/>
            <Body/>
        </div>
    );
}