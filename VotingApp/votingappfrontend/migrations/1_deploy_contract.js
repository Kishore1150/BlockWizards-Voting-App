const votingsystem = artifacts.require('votingsystem.sol')

module.exports = function (deployer) {
    deployer.deploy(votingsystem);
};