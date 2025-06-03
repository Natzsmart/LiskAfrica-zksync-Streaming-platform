// import { ethers } from "hardhat"; // needed for getSigners(), getContractFactory()
// import { parseEther } from "ethers"; // from ethers.js v6

// async function main() {
//   const [deployer] = await ethers.getSigners();
//   console.log("Deploying with:", deployer.address);

//   const title = "Test Song";
//   const symbol = "ZKT";
//   const nftPrice = parseEther("0.01"); // ✔ no utils
//   const audioURI = "ipfs://example-audio-uri";
//   const artist = deployer.address;
//   const coverURI = "ipfs://example-cover-uri";

//   const ContractFactory = await ethers.getContractFactory("SongNFT");
//   const contract = await ContractFactory.deploy(
//     title,
//     symbol,
//     nftPrice,
//     audioURI,
//     artist,
//     coverURI
//   );

//   await contract.deployed();
//   console.log("Contract deployed to:", contract.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



import { ethers } from "hardhat";
import { parseEther } from "ethers";
import * as SongNFT from "../artifacts/contracts/SongNFT.sol/SongNFT.json"; // <- This is key

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const title = "Test Song";
  const symbol = "ZKT";
  const nftPrice = parseEther("0.01");
  const audioURI = "ipfs://example-audio-uri";
  const artist = deployer.address;
  const coverURI = "ipfs://example-cover-uri";

  const factory = new ethers.ContractFactory(
    SongNFT.abi,
    SongNFT.bytecode,
    deployer
  );

  const contract = await factory.deploy(
    title,
    symbol,
    nftPrice,
    audioURI,
    artist,
    coverURI
  );

  await contract.waitForDeployment();
  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
