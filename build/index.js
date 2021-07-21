"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var http = require('http');
var metadataService = new aws_sdk_1.default.MetadataService();
var hostname = '127.0.0.1';
var port = 80;
var server = http.createServer(function (req, res) {
    // metadataService.request("/latest/meta-data/<instance-id>", function(err, data) {
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end(data.toString());
    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('HELLO WORLD!!!');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
