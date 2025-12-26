import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";

export const getListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(
        JSON.stringify(
            await serviceListEpisodes()
        )
    );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(
        JSON.stringify(
            content
        )
    )
}