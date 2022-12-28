const SVGNFT = artifacts.require("SVGNFT");
const expect = require("chai").expect;
contract("Deploy SVGNFT", () => {
  it("Deploy ", async () => {
    await SVGNFT.new();
  });
});

contract("SVGNFT create", (accounts) => {
  let [admin, user1] = accounts;
  let contract;
  beforeEach(async () => {
    contract = await SVGNFT.new();
  });

  it("create 3 NFT", async () => {});
});
