const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require('../../datas/data.json');
chai.use(chaiHttp)

class login {
    constructor() {
      this.host = data.baseURL
      this.header = data.header
    }

    async login(payload, signature) {
        const response = await chai.request(this.host)
        .post('/authentications')
        .send(payload) //body request
        .set('Content-Type', this.header)
        .set('Accept', this.header)
        return response
      }
  }
  module.exports = login