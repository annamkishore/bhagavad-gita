import React, {useState, useEffect} from 'react';
import audio1 from "../resources/audio/Chapter-01-05.mp3";
import {fetchAudioTime} from "../utils/Util";

export function Chapter(props) {
    if (!props.slokas) {
        return <></>
    }

    let timeData;
    fetchAudioTime().then(data => {
        timeData = data;
    });

    let chapName = props.name
    let chapSlokas = props.slokas
    let slokas = Object.values(chapSlokas)

    let isPlaying = false;
    let currentSloka;
    function playPause(num) {
        console.log(timeData.audio[1][num])

        if(!currentSloka || currentSloka !== num) {
            currentSloka = num;

            let url = document.querySelector("#songSource").src;
            let songWindow = "#t=466,486";

            url = url.split("#")[0] + songWindow;
            document.querySelector("#songSource").src = url;
            console.log(currentSloka, songWindow)
            song.pause();
            song.currentTime = parseInt(timeData.audio[1][num])
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
                    <audio id="song" preload="auto" /*controls*/>
                        <source id="songSource" src={audio1 + "#t=466"} type="audio/mp3"/>
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