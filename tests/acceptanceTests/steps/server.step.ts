import { Given, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import request from 'supertest';
import assert from 'assert';
import express, { Express, Request, Response } from 'express';
import { Server } from 'http';

const server: Express = express();
let _request: request.Test;
let _response: request.Response;
let onServer: Server;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(server).get(route);
});

Then('The response status code should be {int}', async (value: number) => {
  _response = await _request.expect(value);
  assert.equal(_response.status, 200);
});

BeforeAll(() => {
  onServer = server.listen(8000, () => {
    return 200;
  });
  server.get('/status', (req: Request, res: Response) => {
    res.status(200).send();
  });
});
AfterAll(() => {
  onServer.close();
});
