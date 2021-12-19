import React, {useState, useEffect} from 'react';
import * as util from "../utils/Util";

import audio1to5 from "../resources/audio/Chapter-01-05.mp3";
import audio6to12 from "../resources/audio/Chapter-06-12.mp3";
import audio13to18 from "../resources/audio/Chapter-13-18.mp3";

let audioUrl = chapter => {
    let audioFile;
    switch(chapter) {
        case 1: case 2: case 3: case 4: case 5:
            audioFile = audio1to5;
            break;
        case 6: case 7: case 8: case 9: case 10: case 11: case 12:
            audioFile = audio6to12;
            break;
        case 13: case 14: case 15: case 16: case 17: case 18:
            audioFile = audio13to18;
            break;
    }
    return audioFile;
}

export function Chapter(props) {
    if (!props.slokas) {
        return <></>
    }

    let timeData;
    util.fetchAudioTime().then(data => {
        timeData = data;
    });

    let chapName = props.name
    let chapNum = props.number
    let chapSlokas = props.slokas
    let slokas = Object.values(chapSlokas)

    let isPlaying = false;
    let currentSloka;
    function playPause(slokaNum) {
        let startTime = timeData.audio[chapNum][slokaNum];
        console.log(startTime)

        if(!currentSloka || currentSloka !== slokaNum) {
            currentSloka = slokaNum;

            let url = document.querySelector("#songSource").src;
            let songWindow = "#t=466,486";

            url = url.split("#")[0] + songWindow;
            document.querySelector("#songSource").src = url;
            console.log(currentSloka, songWindow)
            song.pause();
            song.currentTime = util.toSeconds(startTime)
            song.play();
            isPlaying = true;
            return;
        }

        if(isPlaying) {
            song.pause();
            isPlaying = false;
        }else {
            song.play();
            isPlaying = true;
        }
    }

    return <>
        <table border={0} cellSpacing={0} cellPadding={0} align={"center"}
               style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <thead>
            <tr>
                <td colSpan={2} style={{textAlign: "center", backgroundColor: "grey"}}>
                    <span style={{fontSize: "1.5rem"}}>{chapName}</span>
                    <audio id="song" preload="auto">
                        <source id="songSource" src={audioUrl(chapNum) + "#t=466"} type="audio/mp3"/>
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
                    <td style={{paddingLeft: "0.5rem", borderLeft: 0, backgroundColor: i%2 ? "grey" : ""}}
                        onClick={()=>{playPause(i+1)}}>
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