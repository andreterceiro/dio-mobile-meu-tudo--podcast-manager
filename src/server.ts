import * as http from "http";

const port = process.env.PORT;

const server = http.createServer(
    (
        req, 
        res
    ) => {
        res.end("oi");
    }
);

server.listen(
    port,
    () => {
        console.log(`servidor iniciado na porta ${port}`);
    }
);