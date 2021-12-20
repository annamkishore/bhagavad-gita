import React, {useState, useEffect} from 'react';
import FloatingMenu from "./FloatingMenu";

import {Chapter} from './Chapter';
import * as util from "../utils/Util";

function Book(props) {
    let chapterNo = props.chapter;
    chapterNo = chapterNo || 1;

    const [book, setBook] = useState(null);
    useEffect(() => {
        (async function f1() {
            let slokasAndTitles = await util.fetchSlokas();
            setBook(slokasAndTitles);
        })();
    }, []);

    return book && <div className="App">
        <span style={{fontSize: "2rem"}}>భగవద్గీత</span> <br/>
        <Chapter name={book && book.title[chapterNo]}
                 number={chapterNo}
                 slokas={book && book.slokas[chapterNo]}
        />
        <FloatingMenu/>
    </div>

}

export default Book;
