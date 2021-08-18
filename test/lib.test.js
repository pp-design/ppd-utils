const expect = require("chai").expect;

const { version } = require("./../index");

describe("获取版本号", function () {
    it('应该获得版本号', async function () {
        expect(await version("handlebars", "1.0.0")).to.be.equal(true);
    });
});