import {
    Connection,
    Keypair,
    Transaction,
    TransactionInstruction,
    clusterApiUrl,
    sendAndConfirmTransaction,
} from "@solana/web3.js";

function createKeypairFromFile(path: string): Keypair {
    return Keypair.fromSecretKey(
        Buffer.from(JSON.parse(require("fs").readFileSync(path, "utf-8")))
    )
};

describe("hello-solana", () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const payer = createKeypairFromFile(require('os').homedir() + '/.config/solana/id.json');
    const program = createKeypairFromFile('./program/target/so/program-keypair.json');

    it("Say hello!", async () => {

        let ix = new TransactionInstruction({
            keys: [
                {pubkey: payer.publicKey, isSigner: true, isWritable: true}
            ],
            programId: program.publicKey,
            data: Buffer.alloc(0), // No data
        });

        let tx = new Transaction().add(ix);

        const sign = await sendAndConfirmTransaction(
            connection,
            tx,
            [payer]
        );
        
        console.log(sign);
    });
});