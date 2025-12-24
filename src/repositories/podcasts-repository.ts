import fs from "fs";
import * as _path from "path";
import Podcast from "../models/Podcast";

const pathData = _path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPosdcast = async (): Promise<Podcast[]> => {
    const rawdata = fs.readFileSync(pathData);
    const jsonFile = JSON.parse(rawdata.toString());
    return jsonFile;
}