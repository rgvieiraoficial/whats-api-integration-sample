import fastify, { FastifyInstance } from "fastify";
import cors from '@fastify/cors';
import fastfyWebSocket from '@fastify/websocket';

import { appRoutes } from './routes';

const app: FastifyInstance = fastify();

app.register(appRoutes);

app.register(cors, {
  origin: 'http://localhost:3000',
});

export { app };