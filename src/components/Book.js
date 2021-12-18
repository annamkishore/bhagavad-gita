import React, {useState, useEffect} from 'react';
import axios from 'axios';
import yaml from 'yaml';

import {Chapter} from './Chapter';

import stats from "../resources/stats.png";
import slokasFile from "../resources/slokas.yaml";

function Book(props) {
    // let chapterNo = props.match.path.substring(1);
    let chapterNo = 1;

    const [book, setBook] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios(slokasFile);
            let responseObj = yaml.parse(response.data)
            setBook(responseObj);
        }

        fetchData();
    }, {});

    return (
        <div className="App">
            <span style={{fontSize: "2rem"}}>భగవద్గీత</span> <br/>
            {/*<span> Chapter wise count </span><br/>*/}
            {/*<img src={stats} alt={"Bhagavad Gita"}/> <br/>*/}

            <Chapter name={book && book.title[chapterNo]}
                     slokas={book && book.slokas[chapterNo]}
            />
        </div>
    );
}

export default Book;
