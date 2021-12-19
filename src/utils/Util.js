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

