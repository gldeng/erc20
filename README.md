# hashed-timelock-contract-ethereum

Cloned and adapted from https://github.com/chatch/hashed-timelock-contract-ethereum

[Hashed Timelock Contracts](https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts) (HTLCs) for Ethereum:

- [HashedTimelockERC20.sol](contracts/HashedTimelockERC20.sol) - HTLC for ERC20 tokens

## Run Tests
```
$ npm install
$ truffle test
Using network 'test'.


Compiling your contracts...
===========================
> Compiling ./contracts/HashedTimelockERC20.sol
> Compiling ./test/helper/AliceERC20.sol
> Compiling ./test/helper/BobERC20.sol


  Contract: HashedTimelock swap between two ERC20 tokens
    ✓ Step 1: Alice sets up a swap with Bob in the AliceERC20 contract (348ms)
    ✓ Step 2: Bob sets up a swap with Alice in the BobERC20 contract (323ms)
    ✓ Step 3: Alice as the initiator withdraws from the BobERC20 with the secret (209ms)
    ✓ Step 4: Bob as the counterparty withdraws from the AliceERC20 with the secret learned from Alice's withdrawal (192ms)
    Test the refund scenario:
      ✓ the swap is set up with 5sec timeout on both sides (3761ms)


  5 passing (6s)
```

## Protocol - ERC20

### Main flow

![](docs/sequence-diagram-htlc-erc20-success.png?raw=true)

### Timelock expires

![](docs/sequence-diagram-htlc-erc20-refund.png?raw=true)

## Interface
### HashedTimelockERC20

1.  `newContract(receiverAddress, hashlock, timelock, tokenContract, amount)` create new HTLC with given receiver, hashlock, expiry, ERC20 token contract address and amount of tokens
2.  `withdraw(contractId, preimage)` claim funds revealing the preimage
3.  `refund(contractId)` if withdraw was not called the contract creator can get a refund by calling this some time after the time lock has expired.

See [test/htlcERC20ToERC20.js](test/htlcERC20ToERC20.js) for examples of interacting with the contract from javascript.
