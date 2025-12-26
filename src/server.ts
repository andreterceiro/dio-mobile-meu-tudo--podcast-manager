import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import { app } from "./app";

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(
    port,
    () => {
        console.log(`servidor iniciado na porta ${port}`);
    }
);

// current video: Chamada Para API Com Simuladores De Clients