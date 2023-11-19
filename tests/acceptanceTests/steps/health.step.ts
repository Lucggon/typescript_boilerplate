import {defineFeature, loadFeature} from  'jest-cucumber'; 
import { HealthCheck } from '../../../src/app/HealthCheck';

const feature = loadFeature('tests/acceptanceTests/features/health.feature');

defineFeature(feature, test => {
    let health: HealthCheck;

    test('Check health', ({ given, then }) => {
        given('I call HealthCheck', () => {
            health = new HealthCheck();
        });

        then('The return should be true', () => {
            expect(true).toBe(health.getStatus());
        });
    });
});