import express from "express";
import { Server as WebSocketServer } from "socket.io";
import fs from "fs";
import http from "http";
import https from "https";
import Sockets from "./sockets";


const app = express();
// con servicio ssl
// var privateKey  = fs.readFileSync('/home/perfect/conf/web/ssl.perfectwalnut.com.key');
// var certificate = fs.readFileSync('/home/perfect/conf/web/ssl.perfectwalnut.com.crt');
// var ca = fs.readFileSync('/home/perfect/conf/web/ssl.perfectwalnut.com.ca');
// var credentials = {key: privateKey, cert: certificate, ca: ca};
// const server = https.createServer(credentials, app);

// sin servisio ssl
const server = http.createServer(app);
app.use(express.static(__dirname + "/public"));

const httpServer = server.listen(3000);
console.log("Server on http://localhost:3000");

const io = new WebSocketServer(httpServer);

Sockets(io);
