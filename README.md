# Solana SPL Token Launcher Lite

A streamlined, single-directory tool for deploying and managing SPL Tokens on the Solana blockchain. This repository provides an expert-level foundation for developers looking to understand the mechanics of the Solana Program Library (SPL) without the complexity of deeply nested architectures.

## Features
* **Token Creation**: Initialize a new SPL Mint with 9 decimals.
* **Metadata Integration**: Includes hooks for on-chain metadata pointers.
* **Minting & Transfer**: Pre-configured scripts to mint initial supply and distribute tokens.
* **Mainnet & Devnet Ready**: Easily toggle between environments via environment variables.

## Quick Start
1. Install dependencies: `npm install`
2. Configure your `.env` with a valid Solana Keypair.
3. Run the deployment script: `node deploy-token.js`

## Security
This repository is for educational and development purposes. Always ensure your private keys are stored securely and never committed to version control.
