import axios from "axios";
import slokasFile from "../resources/slokas.yaml";
import audioTimeFile from "../resources/audio/audio-time.yaml";
import yaml from "yaml";

export async function fetchData() {
    const response = await axios(slokasFile);
    let responseObj = yaml.parse(response.data)
    return responseObj;
}

export async function fetchAudioTime() {
    const response = await axios(audioTimeFile);
    let responseObj = yaml.parse(response.data)
    return responseObj;
}

// Assumed formats as below
// 10:20:30 hh:mm:ss
//    10:45    mm:ss
export function toSeconds(duration) {
    let format = duration.split(':');
    if (format.length === 3) {
        const [hours, minutes, seconds] = duration.split(':');
        return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
    } else if (format.length === 2) {
        const [minutes, seconds] = duration.split(':');
        return Number(minutes) * 60 + Number(seconds);
    }
}

function toTime(seconds) {
    let mm = parseInt(seconds / 60)
    let ss = seconds - (mm * 60)
    return `${mm}:${ss}`
}

// example for 6th chapter: getStartTime(1, "00:23", 47, "10:06")
// output, for 6th chapter, use in the audio-time.yaml
function getStartTime(start, startTime, end, endTime) {
    let startSec = toSeconds(startTime)
    let endSec = toSeconds(endTime)
    let diffSec = endSec - startSec

    let diff = end - start
    let avgSec = diffSec / diff
    let arrCount = diff - 1

    return Array(arrCount).fill(avgSec)
        .map((num, i) => parseInt(startSec + num * (i + 1)))
        .map(num => toTime(num))
}

// Array(18).fill(12.4).map((num,i) => parseInt(3356+num *(i+1))).map(num => toTime(num))
