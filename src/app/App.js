import React, {useState, useEffect} from 'react';
import axios from 'axios';
import yaml from 'yaml';

import {Chapter} from './chapter';

import './App.css';
import stats from "./stats.png";
import slokasFile from "./slokas.yaml";

function App() {
    const [slokas, setSlokas] = useState({});

    let slokasJson
    useEffect(async () => {
        const response = await axios(slokasFile);
        slokasJson = yaml.parse(response.data)
        window.slokasJson = slokasJson
        setSlokas(slokasJson);
    });

    return (
        <div className="App">
            <span style={{fontSize: 50}}>భగవద్గీత</span> <br/>
            <span> Chapter wise count </span><br/>
            <img src={stats}/> <br/>

            <Chapter slokas={slokas && slokas[1]}/>
        </div>
    );
}

export default App;
