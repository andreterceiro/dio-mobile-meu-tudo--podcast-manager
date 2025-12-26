import * as http from "http";
import {getrListEpisodes, getFilterEpisodes} from "./controllers/podcast-controller";

const port = process.env.PORT;

const server = http.createServer(
    async (
        req, 
        res
    ) => {
        if (req.method === "GET" && req.url === "/api/list") {
            await getrListEpisodes(req, res);
        }

        if (req.method === "GET" && req.url === "/api/episode") {
            await getFilterEpisodes(req, res);
        }
    }
);

server.listen(
    port,
    () => {
        console.log(`servidor iniciado na porta ${port}`);
    }
);

// current video: Chamada Para API Com Simuladores De Clients