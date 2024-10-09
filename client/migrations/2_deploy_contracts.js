// Import the Election contract artifact. 
// `artifacts.require` is a Truffle function that fetches the compiled contract's ABI and bytecode.
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
    deployer.deploy(Election);
};
