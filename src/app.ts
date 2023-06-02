import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';
import { SocketServer } from './socketServer';

const app: FastifyInstance = fastify();

app.register(appRoutes);

app.register(cors, {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

const socketServer = SocketServer.getInstance();

socketServer.listen();

app.ready((err) => {
  if (err) throw err;
});

export { app };