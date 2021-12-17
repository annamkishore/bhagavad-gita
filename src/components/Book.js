import React, {useState, useEffect} from 'react';
import axios from 'axios';
import yaml from 'yaml';

import {Chapter} from './Chapter';

import '../containers/App.css';
import stats from "../images/stats.png";
import slokasFile from "../resources/slokas.yaml";

function Book() {
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
            <img src={stats} alt={"Bhagavad Gita"}/> <br/>

            <Chapter slokas={slokas && slokas[1]}/>
        </div>
    );
}

export default Book;
