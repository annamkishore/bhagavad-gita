import React, {useState, useEffect} from 'react';

export function Chapter(props) {
    if (!props.slokas) {
        return <></>
    }

    let chapName = props.name
    let chapSlokas = props.slokas
    let slokas = Object.values(chapSlokas)

    return <>
        <table border={0} cellSpacing={0} cellPadding={0} align={"center"}
               style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <thead>
            <tr>
                <td colSpan={2} style={{textAlign: "center", backgroundColor: "orange"}}>
                    <span style={{fontSize: "1.5rem"}}>{chapName}</span>
                </td>
            </tr>
            </thead>
            <tbody>
            {slokas.map((sloka, i) =>
                <tr key={i}>
                    {/*   index   */}
                    <td style={{padding: 0, textAlign: "center", borderRight: 0, paddingLeft: "0.3rem", backgroundColor: i%2 ? "grey" : ""}}>
                        {i + 1}
                    </td>
                    {/*   sloka   */}
                    <td style={{paddingLeft: "0.5rem", borderLeft: 0, backgroundColor: i%2 ? "grey" : ""}}>
                        {/*{sloka}*/}
                        {sloka.split("\\n").map((line, temp) =>
                            <span key={temp}>
                                {line} <br/>
                            </span>
                        )}
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </>
}