import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui.js/faucet';

const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

let walletAddress = null;

document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        if (typeof window.suiWallet !== 'undefined') {
            const accounts = await window.suiWallet.requestAccounts();
            walletAddress = accounts[0];
            document.getElementById('status').textContent = `Status: Connected to ${walletAddress}`;
            document.getElementById('mintButton').disabled = false;
        } else {
            alert('Sui Wallet extension not found. Please install Sui Wallet.');
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        document.getElementById('status').textContent = 'Status: Connection failed';
    }
});

document.getElementById('mintButton').addEventListener('click', async () => {
    const packageId = document.getElementById('packageId').value.trim();
    if (!packageId) {
        alert('Please enter a valid Package ID');
        return;
    }
    
    try {
        document.getElementById('status').textContent = 'Status: Minting...';
        
        const txb = new TransactionBlock();
        txb.moveCall({
            target: `${packageId}::hello_world::mint`,
        });
        
        const result = await window.suiWallet.signAndExecuteTransactionBlock({
            transactionBlock: txb,
        });
        
        document.getElementById('status').textContent = `Status: Minted! Transaction: ${result.digest}`;
        
        // Update iframe to show the transaction
        document.getElementById('explorerFrame').src = `https://suiexplorer.com/txblock/${result.digest}?network=devnet`;
        
    } catch (error) {
        console.error('Error minting:', error);
        document.getElementById('status').textContent = 'Status: Minting failed';
    }
});