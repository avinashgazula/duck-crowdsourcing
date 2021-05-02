process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../server');
const token = process.env.TEST_JWT

const should = chai.should();
chai.use(chaiHttp);

describe('GET /api/crowdsourcing', () => {
    it('it should GET all the responses', (done) => {
        chai.request(app)
            .get('/api/crowdsourcing')
            .auth(token, { type: 'bearer' })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('POST /api/crowdsourcing', () => {
    it('it should POST a submitted response', (done) => {
        let crowdsourceInfo = {
            timeOfDayFed: '10:00',
            foodFed: 'bread',
            locationFed: 'park',
            countFed: '12',
            quantityFed: '10',
            repeatSchedule: false,
            repeatFor: 1
        }
        chai.request(app)
            .post('/api/crowdsourcing')
            .auth(token, { type: 'bearer' })
            .send(crowdsourceInfo)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});
