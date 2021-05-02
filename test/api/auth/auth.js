process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../server');

const should = chai.should();
chai.use(chaiHttp);

describe('GET /api/auth', () => {
    it('it should GET a JWT', (done) => {
        chai.request(app)
            .get('/api/auth')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});