const request = require("request");
const expect = require("chai").expect;

describe("Main applicaiton", () => {
  describe("/", () => {
    const url = "http://localhost:3000";

    it("returns 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
