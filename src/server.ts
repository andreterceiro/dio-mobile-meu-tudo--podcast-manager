import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

const port = process.env.PORT;

const server = http.createServer(
    async (
        req, 
        res
    ) => {
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
        if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
        }

        if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
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