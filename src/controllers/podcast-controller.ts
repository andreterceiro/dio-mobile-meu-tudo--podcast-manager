import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";

export const getrListEpisodes  = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(
        JSON.stringify(
            await serviceListEpisodes()
        )
    );
}