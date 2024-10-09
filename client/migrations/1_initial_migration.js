// Import the Migrations contract artifact. 
// `artifacts.require` is a Truffle function that helps in fetching the contract's compiled artifacts.
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
