NFT MARKETPLACE NOTES

Run commands:

Before running anything we need to delete test/Lock.js file and also change URL everytime when we run (URL in hardhat.conig.js should match)

npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network localganache