import {IncomingMessage, ServerResponse} from "http";

export const getrListEpisodes  = (req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(
        {
            name: "André"
        }
    );
}