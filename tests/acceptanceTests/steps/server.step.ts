import { AfterAll,BeforeAll, Given, Then } from '@cucumber/cucumber';
import assert from 'assert';
import express, { Express } from 'express';
import request from 'supertest';

import { Server } from '../../../src/app/Server';

const server: Express = express();
const finalServer:Server = new Server();
let _request: request.Test;
let _response: request.Response;


Given('I send a GET request to {string}', (route: string) => {
  _request = request(server).get(route);
});

Then('The response status code should be {int}', async (value: number) => {
  _response = await _request.expect(value);
  assert.equal(_response.status, 200);
});

BeforeAll(() => {
  finalServer.listen();
});
AfterAll(() => {
  finalServer.stop();
});
