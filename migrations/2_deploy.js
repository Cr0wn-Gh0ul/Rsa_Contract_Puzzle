var Soulve = artifacts.require("Soulve.sol");
var RSA = artifacts.require("SolRsaVerify.sol");

module.exports = async function(deployer) {
  await deployer.deploy(RSA);
  await deployer.link(RSA, Soulve);
  await deployer.deploy(Soulve);
};
