import React, {useState, useEffect} from 'react';
import audio1 from "../resources/audio/Chapter-01-05.mp3";

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
                <td colSpan={2} style={{textAlign: "center", backgroundColor: "grey"}}>
                    <span style={{fontSize: "1.5rem"}}>{chapName}</span>
                    <audio id="song" preload="auto" /*controls*/>
                        <source src={audio1 + "#t=595"} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
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