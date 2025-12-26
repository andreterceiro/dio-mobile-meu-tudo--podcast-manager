import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    const response: PodcastTransferModel = await serviceListEpisodes();
    res.writeHead(response.statusCode, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            response.body
        )
    );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const response: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    console.log(response);
    res.writeHead(response.statusCode, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            response.body
        )
    )
}