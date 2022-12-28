const Encode = artifacts.require("Encode");
const expect = require("chai").expect;
contract("Deploy Encode", () => {
  it("Should Deploy it", async () => {
    await Encode.new();
  });
});

contract("Function Encode", () => {
  let contract;
  beforeEach(async () => {
    contract = await Encode.new();
  });

  it("encode function test", async () => {
    const _address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    const _uint = 127;
    const result = await contract.encode(_address, _uint);
    // console.log(result);
  });

  it("Decode", async () => {
    const input =
      "0x0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000054a6fc3a36f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055061756c6f000000000000000000000000000000000000000000000000000000";
    const result = await contract.decode(input);
    console.log(result);
    // result.forEach((element) => {
    //   console.log(element);
    // });
  });
});
