const request = require("request");
const expect = require("chai").expect;
const { app } = require("../src/app.js");

describe("Main applicaiton", () => {
  describe("/", () => {
    it("should get a name", (done) => {
      request(app).get("/").expect(200).end(done);
    });
  });
});
