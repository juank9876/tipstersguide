import pino from "pino";

const logger = pino({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transport: undefined, // no transport, evita workers
});

export const log = logger;