/// <reference types="node" />
import * as express from 'express';
import * as http from 'http';
import { HandlerFunction } from './functions';
declare global {
    namespace Express {
        interface Request {
            rawBody?: Buffer;
        }
    }
}
export declare enum SignatureType {
    HTTP = "http",
    EVENT = "event",
    CLOUDEVENT = "cloudevent"
}
/**
 * Registers handler functions for route paths.
 * @param app Express application object.
 * @param userFunction User's function.
 * @param functionSignatureType Type of user's function signature.
 */
export declare function registerFunctionRoutes(app: express.Application, userFunction: HandlerFunction, functionSignatureType: SignatureType): void;
/**
 * Enables registration of error handlers.
 * @param server HTTP server which invokes user's function.
 * @constructor
 */
export declare class ErrorHandler {
    private readonly server;
    constructor(server: http.Server);
    /**
     * Registers handlers for uncaught exceptions and other unhandled errors.
     */
    register(): void;
}
/**
 * Creates and configures an Express application.
 * @return app Express application
 */
export declare function getApp(): express.Application;
/**
 * Creates and configures an Express application and returns an HTTP server
 * which will run it.
 * @param userFunction User's function.
 * @param functionSignatureType Type of user's function signature.
 * @return HTTP server.
 */
export declare function getServer(userFunction: HandlerFunction, functionSignatureType: SignatureType): http.Server;
