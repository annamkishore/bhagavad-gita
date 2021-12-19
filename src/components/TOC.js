import {fetchData} from "../utils/Util";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function TOC() {

    const [titles, setTitles] = useState(null);
    useEffect(() => {
        (async function f1() {
            let data = await fetchData();
            setTitles(Object.values(data.title));
        })();
    }, []);


    return <>
        {titles && <table border={0} cellSpacing={0} cellPadding={5} align={"center"}
                          style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <tbody>
            <tr>
                <td align={"center"}><span style={{fontSize: "2rem"}}>భగవద్గీత</span> <br/></td>
            </tr>
            <tr>
                <td><Link to={`/bhagavad-gita/stats`}>Statistics</Link></td>
            </tr>
            {titles.map((title, i) =>
                <tr key={i}>
                    <td><Link to={`/bhagavad-gita/${i + 1}`}>{i + 1 + ". " + title}</Link></td>
                </tr>
            )}
            <tr>
                <td>
                    <span style={{fontSize: "0.9rem"}}>
                        created this webapp on 19th Dec 2021, <br/>
                        in the memory of my daughter Advaita's 6th Birthday
                    </span>
                </td>
            </tr>
            </tbody>
        </table>
        }
    </>
}