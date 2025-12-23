import * as http from "http";
import {getrListEpisodes} from "./controllers/podcast-controller";

const port = process.env.PORT;

const server = http.createServer(
    async (
        req, 
        res
    ) => {
        if (req.method === "GET") {
            await getrListEpisodes(req, res);
        }
    }
);

server.listen(
    port,
    () => {
        console.log(`servidor iniciado na porta ${port}`);
    }
);