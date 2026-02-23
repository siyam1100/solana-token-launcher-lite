const { 
    Connection, 
    Keypair, 
    LAMPORTS_PER_SOL, 
    clusterApiUrl 
} = require('@solana/web3.js');
const { 
    createMint, 
    getOrCreateAssociatedTokenAccount, 
    mintTo 
} = require('@solana/spl-token');
require('dotenv').config();

async function main() {
    // 1. Setup Connection and Payer
    const connection = new Connection(process.env.SOLANA_RPC_URL || clusterApiUrl('devnet'), 'confirmed');
    
    // Replace with your actual secret key array from .env
    const secretKey = Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY));
    const payer = Keypair.fromSecretKey(secretKey);

    console.log(`Payer Address: ${payer.publicKey.toBase58()}`);

    // 2. Create New Token Mint
    console.log("Creating token mint...");
    const mint = await createMint(
        connection,
        payer,
        payer.publicKey, // Mint Authority
        payer.publicKey, // Freeze Authority
        9                // Decimals
    );

    console.log(`Token Mint Created: ${mint.toBase58()}`);

    // 3. Create Associated Token Account (ATA)
    console.log("Creating associated token account...");
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        payer.publicKey
    );

    console.log(`ATA Created: ${tokenAccount.address.toBase58()}`);

    // 4. Mint Initial Supply (e.g., 1000 tokens)
    console.log("Minting tokens...");
    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer,
        1000 * Math.pow(10, 9)
    );

    console.log("Success! 1000 tokens minted to your wallet.");
}

main().catch((err) => {
    console.error(err);
});
