import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as util from "../utils/Util";

export function TOC() {

    const [titles, setTitles] = useState(null);
    useEffect(() => {
        (async function f1() {
            let slokas = await util.fetchSlokas();
            setTitles(Object.values(slokas.title));
        })();
    }, []);


    return <>
        {titles && <table border={0} cellSpacing={0} cellPadding={5} align={"center"}
                          style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <tbody>
            <tr>
                <td>
                    <Link to={`/stats`} style={{textDecoration: 'none'}}>
                        Statistics
                    </Link>
                </td>
            </tr>
            {titles.map((title, i) =>
                <tr key={i}>
                    <td><Link to={`/${i + 1}`} style={{textDecoration: 'none'}}>{i + 1 + ". " + title}</Link></td>
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