import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

const port = process.env.PORT;

const server = http.createServer(
    async (
        request, 
        response
    ) => {
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
        if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if (request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
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