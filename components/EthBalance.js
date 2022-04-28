import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function EthBalance({user}) {
    const [balance, setBalance] = useState(0)
    const [nTxIndex, setnTxIndex] = useState(0)
    const Web3Api = useMoralisWeb3Api()

    useEffect(() => {
        getInfo();
      }, []);

    async function getInfo() {
        try {
            let options1 = {
                chain: "0xa869",
                address: user.get("ethAddress")
            }
            const account_balance = await Web3Api.account.getNativeBalance(options1)
            console.log(account_balance)
            if (account_balance.balance) {
                setBalance(Moralis.Units.FromWei(account_balance.balance))
            }

            let options2 = {
              chain: "0xa869",
                address: user.get("ethAddress"),
              from_block: "8961689"
            }

            const account_txs = await Web3Api.account.getTransactions(options2)
            console.log(account_txs)
            if (account_txs.total) {
              setnTxIndex(account_txs.total)
            }
        } catch (e) {
            console.log(e)
        }
    }

    

    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">User: {user.get("ethAddress")}</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Balance: 
                                                                                                        {balance && <b>{balance}</b>}</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Num of Tx: 
                                                                                                        {nTxIndex && <b>{nTxIndex}</b>}</li>
        </ul>
    )
}

