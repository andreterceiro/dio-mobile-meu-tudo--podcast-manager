import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";
import { HttpStatusCodes } from "../utils/http-status-codes";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(HttpStatusCodes.OK, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            await serviceListEpisodes()
        )
    );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const response: FilterPodcastModel = await serviceFilterEpisodes(req.url);
    res.writeHead(response.statusCode, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            response.body
        )
    )
}