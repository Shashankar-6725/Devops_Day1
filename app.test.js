const request = require('supertest');

const app = require('./app'); 

describe('GET /', () => {
    it('it should reteun hello world', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);

        expect(res.text).toBe('hello world');
    });
});