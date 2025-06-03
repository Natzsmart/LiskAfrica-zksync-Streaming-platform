### Commit Message:
feat: Add SongNFT contract deployment and functionality on Lisk Sepolia Testnet

### PR Description:
This PR adds the fully functional `SongNFT` smart contract deployed to the Lisk Sepolia Testnet. The contract enables:

- Minting unique music NFTs representing songs with metadata (title, symbol, audio URI, cover URI).
- Tracking streams and users’ listening history.
- Managing royalty payments to artists.
- Secure ownership checks before allowing access to song content.

The contract integrates with the zkSync Streaming platform to support decentralized music playlist management and royalties.

## Deployed contract address
The SongNFT contract has been successfully deployed on the Lisk Sepolia Testnet at this address:  
```bash
0x78066bC9614e93a64750b795599f24fbCf45f58E
```

---

## SongNFT Contract

The `SongNFT` contract is the core component of the zkSync Streaming Platform that enables musicians and artists to mint their music tracks as unique NFTs on the blockchain. Each NFT represents a song with associated metadata including:

- Title and symbol of the music collection
- Audio URI pointing to IPFS-stored song files
- Cover art URI
- Artist wallet address

### Key Features

- **Minting:** Users can mint an NFT for a specific song, making it a collectible unique token.
- **Streaming Tracking:** The contract tracks how many times each song is streamed and maintains user-specific stream history.
- **Royalties:** The contract accumulates royalty payments for artists based on streams and enables payout functions.
- **Access Control:** Only NFT owners can retrieve the audio URI for their song, protecting artist content.
- **Integration:** Designed to work alongside other zkSync Streaming Platform contracts for playlist management (`zkTune`) and payment abstraction (`Paymaster`).

This contract is deployed on the Lisk Sepolia Testnet and demonstrates a decentralized approach to music rights management and streaming monetization.

---

**Deployed Address:** `0x78066bC9614e93a64750b795599f24fbCf45f58E`

