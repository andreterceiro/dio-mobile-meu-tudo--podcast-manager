import * as http from "http";

const server = http.createServer(
    (
        req, 
        res
    ) => {

    }
);

server.listen(
    3333, 
    () => {
        console.log("servidor iniciado na porta 3333");
    }
);