const Soulve = artifacts.require("Soulve.sol");

const addr = "0x19b1d54c62b2aee2000a3465984ae72a41f66fbb598c1ed7038219d345a8498b";

const wrong = "0x57a0d6a185924d9d579b3ab319fe512331cb0bc6ef2da7d5285cbd06844f5c44662cae2e41ee5020893d6690e34b50a369a78250ae81ba6d708560535ef7cff0299f2ba070b096a9a76e84cf9c902b5e367b341ee166f5fc325dd08a3d971d96d528937f617a1eaf2250c56c4edca80c65970d54fe2492a19468bd32166b3c32"
//const right = "0x2dad4a62bf27c3bde438f19a054c1a408a4ead33218d27a11230298c7fedb19027e02b1e74a52e7d78cf0dd2fc1fa357efe4dd5ad4f7873edbb9330beea2bf7fb96448759d96334fa5f9461fb00a4737847f0d26dbdcc589795a0a4b7158f8dc0bb8add6b4fb917e700b48d95317e2055e4bba5706a0d8da1a8db3ab8ce19d95";
const right = "0x56b3e5d6eeaddfe52aa1369efee7ec1f4e798438b383c100c86b0387780b5804b5e6b02bfc0c8486b1d663870c36f5aa2de2d45e9299bb76d2e67a16547550105b5093a09ef5a260819c86862eadaf71767e08446d6b7fa47efe78b691d3526b93710c2a8b435f5b3da669aabd2703262e39a132c794fcf3b33a9130d0065f6d";

contract("Soulve", async accounts => {

  await describe("..", () => {
    it("test", async () => {
      let instance = await Soulve.deployed();
      let trying = await instance.send(1000000000000000000, {from: accounts[1]});
//      console.log(trying);
      assert.equal('1', '1')
    });
  });
  await describe("...", () => {
    it("test", async () => {
      let instance = await Soulve.deployed();
      let trying = await instance.soulve(addr, right, {from: accounts[1]});
      console.log(trying);
      assert.equal('1', '1')
    });
  });


});

