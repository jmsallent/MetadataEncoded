const SVGFunctions = artifacts.require("SVGFunctions");
const fs = require("fs");
const path = require("path");
const Buffer = require("buffer").Buffer;
const expect = require("chai").expect;

contract("Deploy", () => {
  it("Deploy ALLRIGHT!", async () => {
    await SVGFunctions.new();
  });
});

contract("svgToImageURI function", () => {
  let lib;
  beforeEach(async () => {
    lib = await SVGFunctions.new();
  });

  it("", async () => {
    const svg = fs
      .readFileSync(path.join(__dirname, "triangle.svg"))
      .toString();
    const result = await lib.svgToImageURI(svg);
    const svgBase64 = result.split(",")[1];
    const svgDecoded = Buffer.from(svgBase64, "base64").toString("utf-8");
    expect(svgDecoded).to.be.equal(svg);
  });
});
