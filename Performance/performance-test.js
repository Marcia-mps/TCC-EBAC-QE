import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '20s',
  thresholds: {
    http_req_duration: ['p(95)<5000'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const baseUrl = 'http://lojaebac.ebaconline.art.br';

  const home = http.get(baseUrl);
  check(home, {
    'home carregada com sucesso': (res) => res.status < 500,
  });

  const minhaConta = http.get(`${baseUrl}/minha-conta/`);
  check(minhaConta, {
    'minha conta carregada com sucesso': (res) => res.status < 500,
  });

  sleep(1);
}