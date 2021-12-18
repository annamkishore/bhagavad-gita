import axios from "axios";
import slokasFile from "../resources/slokas.yaml";
import yaml from "yaml";

export async function fetchData() {
    const response = await axios(slokasFile);
    let responseObj = yaml.parse(response.data)
    return responseObj;
}

