import React, {useState, useEffect} from 'react';
import axios from 'axios';
import yaml from 'yaml';

import {Chapter} from './Chapter';

import stats from "../resources/stats.png";
import slokasFile from "../resources/slokas.yaml";

function Book(props) {
    let chapterNo = props.match.path.substring(1);

    const [slokas, setSlokas] = useState({});

    let slokasJson
    useEffect(() => {
        async function fetchData() {
            const response = await axios(slokasFile);
            slokasJson = yaml.parse(response.data)
            window.slokasJson = slokasJson
            setSlokas(slokasJson);
        }
        fetchData();
    });

    return (
        <div className="App">
            {/*<span style={{fontSize: 50}}>భగవద్గీత</span> <br/>*/}
            {/*<span> Chapter wise count </span><br/>*/}
            {/*<img src={stats} alt={"Bhagavad Gita"}/> <br/>*/}

            <Chapter slokas={slokas && slokas[chapterNo]}/>
        </div>
    );
}

export default Book;
