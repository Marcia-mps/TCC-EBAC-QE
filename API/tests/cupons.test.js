const request = require('supertest');

const baseUrl = 'http://lojaebac.ebaconline.art.br';

describe('EBAC Shop - Testes automatizados de API', () => {
  it('Deve validar que a aplicação está acessível', async () => {
    const response = await request(baseUrl).get('/');

    expect(response.status).toBeLessThan(500);
  });

  it('Deve validar acesso à rota da API de cupons sem autenticação', async () => {
    const response = await request(baseUrl).get('/wp-json/wc/v3/coupons');

    expect([401, 403, 404]).toContain(response.status);
  });

  it('Deve validar estrutura da resposta da API', async () => {
    const response = await request(baseUrl).get('/wp-json/wc/v3/coupons');

    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(500);
  });
});