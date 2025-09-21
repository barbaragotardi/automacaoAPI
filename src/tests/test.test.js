const request = require('supertest');
const chai = require('chai');
const app = require('../app');

const expect = chai.expect;

describe('API Tests', function() {
    let token;

    const testUser = {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'testpass123'
    };

    before('Register user', async function() {
        await request(app)
            .post('/api/users/register')
            .send(testUser);
    });

    before('Login user', async function() {
        const res = await request(app)
            .post('/api/users/login')
            .send({ email: testUser.email, password: testUser.password });
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
        token = res.body.token;
    });

    describe('Temperature conversions (authenticated)', function() {
        it('GET /api/temperature/celsiustofahrenheit/0', async function() {
            const res = await request(app)
                .get('/api/temperature/celsiustofahrenheit/0')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('fahrenheit').closeTo(32, 0.01);
        });

        it('GET /api/temperature/fahrenheittocelsius/32', async function() {
            const res = await request(app)
                .get('/api/temperature/fahrenheittocelsius/32')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('celsius').closeTo(0, 0.01);
        });

        it('GET /api/temperature/kelvintocelsius/273.15', async function() {
            const res = await request(app)
                .get('/api/temperature/kelvintocelsius/273.15')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('celsius').closeTo(0, 0.01);
        });

        it('GET /api/temperature/celsiustokelvin/0', async function() {
            const res = await request(app)
                .get('/api/temperature/celsiustokelvin/0')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('kelvin').closeTo(273.15, 0.01);
        });

        it('GET /api/temperature/fahrenheittokelvin/32', async function() {
            const res = await request(app)
                .get('/api/temperature/fahrenheittokelvin/32')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('kelvin').closeTo(273.15, 0.01);
        });

        it('GET /api/temperature/kelvintofahrenheit/273.15', async function() {
            const res = await request(app)
                .get('/api/temperature/kelvintofahrenheit/273.15')
                .set('Authorization', `Bearer ${token}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('fahrenheit').closeTo(32, 0.01);
        });
    });

    describe('Temperature conversions (unauthenticated)', function() {
        it('should return 401 without token', async function() {
            const res = await request(app)
                .get('/api/temperature/celsiustofahrenheit/0');
            expect(res.status).to.equal(401);
            expect(res.body).to.have.property('error');
        });
    });
});