import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    const response: FilterPodcastModel = await serviceListEpisodes();
    res.writeHead(response.statusCode, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            response.body
        )
    );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const response: FilterPodcastModel = await serviceFilterEpisodes(req.url);
    console.log(response);
    res.writeHead(response.statusCode, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            response.body
        )
    )
}