import React, {useState, useEffect} from 'react';
import axios from 'axios';
import yaml from 'yaml';

import './App.css';
import stats from "./stats.png";
import slokasFile from "./slokas.yaml";

function App() {
    const [slokas, setSlokas] = useState(0);

    useEffect(async () => {
        const result = await axios(slokasFile);
        setSlokas(result.data);
        window.slokas = result.data
        window.yaml = yaml

        window.slokasJson = yaml.parse(slokas)
    });

    return (
        <div className="App">
            <h2>భగవద్గీత</h2>
            <h2> Chapter wise count </h2>
            <img src={stats}/> <br/>
            <div>{slokas}</div>
        </div>
    );
}

export default App;
