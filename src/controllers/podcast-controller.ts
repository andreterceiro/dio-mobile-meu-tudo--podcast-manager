import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";
import { HttpStatusCodes } from "../utils/http-status-codes";
import { ContentType } from "../utils/content-type";

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(HttpStatusCodes.OK, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            await serviceListEpisodes()
        )
    );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(HttpStatusCodes.OK, {'Content-type': ContentType.JSON});
    res.end(
        JSON.stringify(
            content
        )
    )
}