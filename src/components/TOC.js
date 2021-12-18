import {fetchData} from "../utils/Util";
import {useEffect, useState} from "react";
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
        {titles && <table border={1} cellSpacing={0} cellPadding={5} align={"center"}
                          style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <tbody>
            <tr><td><Link to={`/stats`}>Statistics</Link></td></tr>
            {titles.map((title, i) =>
                <tr key={i}>
                    <td><Link to={`/${i + 1}`}>{i + 1 + ". " + title}</Link></td>
                </tr>
            )}
            </tbody>
        </table>
        }
    </>
}