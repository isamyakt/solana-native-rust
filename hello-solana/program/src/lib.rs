use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey
};


entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    
    msg!("Hello, Solana");

    msg!("This program's Program ID: {}", &program_id);

    Ok(())
}



// devnet program id: CuKTpfHZTWUbCpxSu3DWe4MQkcbLJSjoCgnCBpXGM5qE