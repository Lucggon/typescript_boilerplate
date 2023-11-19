import { describe } from 'node:test';
import { HealthCheck } from '../../src/app/HealthCheck';

describe('Health check', () => {
  test('health check should be true', () => {
    const health = new HealthCheck();
    expect(health.getStatus()).toBe(true);
  });
});
