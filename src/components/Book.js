import React, {useState, useEffect} from 'react';

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
        <Chapter name={book && book.title[chapterNo]}
                 number={chapterNo}
                 slokas={book && book.slokas[chapterNo]}
        />
    </div>

}

export default Book;
