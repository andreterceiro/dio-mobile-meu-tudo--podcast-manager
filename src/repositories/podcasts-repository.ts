import fs from "fs";
import * as _path from "path";
import Podcast from "../models/Podcast";

const pathData = _path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPosdcast = async (podcastName?: string): Promise<Podcast[]> => {
    const rawdata = fs.readFileSync(pathData);
    let jsonFile = JSON.parse(rawdata.toString());

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcastEntry: Podcast) => {
                podcastEntry.podcastName === podcastName;
            }
        );
    }
    return jsonFile;
}