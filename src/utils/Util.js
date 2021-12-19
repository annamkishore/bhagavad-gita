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
