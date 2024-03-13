const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const auth = require("../apis/login.api");
const expect = require('chai').expect
chai.use(chaiHttp)

describe("TS Login", () => {
    //example of positive test
    it("Successfully Login", async() => {
        loginPayload = {
            "email" : "1691246243-toko5@gmail.com",
            "password": "password"
        }
        //http request
        const response = await new auth().login(loginPayload)
        
        //assertion
        expect(response.status).to.be.equal(201)
        expect(response.body.message).to.be.equal("Authentication berhasil ditambahkan")
    })

    //example of negative test
    it("Should Failed to Login With Empty Password", async() => {
        loginPayload = {
            "email" : "1691246243-toko5@gmail.com",
            "password": ""
        }
        //http request
        const response = await new auth().login(loginPayload)
        
        //assertion
        expect(response.status).to.be.equal(400)
    })


})