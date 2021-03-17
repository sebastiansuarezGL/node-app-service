import supertest from 'supertest';
import app from '../../src/app';

describe('[Integration] Example', () => {
  const request = supertest(app);

  it('should return 200, {OK, uptime}', async () => {
    const response = await request.get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
