// migrations/2_deploy.js
const SimpleToken = artifacts.require('SimpleToken');
const HashedTimelockERC20 = artifacts.require('HashedTimelockERC20');

module.exports = async function (deployer) {
  const zero_18 = '000000000000000000'
  await deployer.deploy(SimpleToken, 'USD Token', 'USD',    '10000' + zero_18);
  await deployer.deploy(SimpleToken, 'Telsa Token', 'TSLA', '100' + zero_18);
  await deployer.deploy(HashedTimelockERC20);
};
