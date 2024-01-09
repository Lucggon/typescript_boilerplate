import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { HealthCheck } from '../../../src/app/HealthCheck';

let healthCheck: HealthCheck;
Given('I call HealthCheck', () => {
  healthCheck = new HealthCheck();
});
Then('The return should be true', () => {
  expect(healthCheck.getStatus()).to.be.true;
});
