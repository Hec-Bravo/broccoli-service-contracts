import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function EthBalance({ user }) {
  const [balance, setBalance] = useState(0)
  const [nTxIndex, setnTxIndex] = useState(0)
  const [usdcBalance, setUsdcBalance] = useState(0)
  const Web3Api = useMoralisWeb3Api()

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    try {
      const res = await fetch('/api/firstAuction')
      const options = await res.json()
      let options1 = {
        chain: "0xa86a",
        address: user.get("ethAddress")
      }

      // let options1 = {
      //   chain: "0xa869",
      //   address: user.get("ethAddress")
      // }

      // let options2 = {
      //   chain: "0xa869",
      //   address: user.get("ethAddress"),
      //   from_block: "8961689"
      // }

      const account_balance = await Web3Api.account.getNativeBalance(options1)
      console.log(account_balance)
      if (account_balance.balance) {
        setBalance(Moralis.Units.FromWei(account_balance.balance))
      }



      const account_txs = await Web3Api.account.getTransactions(options1)
      console.log(account_txs)
      if (account_txs.total) {
        setnTxIndex(account_txs.total)
      }  


      const options2 = options.balanceOf
      options2.params.account = options1.address
      const usdc_balance = await Web3Api.native.runContractFunction(options2)
      //console.log(usdc_balance)
      if(usdc_balance) {
          setUsdcBalance(Moralis.Units.FromWei(usdc_balance, 6))
      }
    } catch (e) {
      console.log(e)
    }
  }



  return (
    <table className="table-fixed text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <thead>
        <tr>
          <th>Account</th>
          <th>Balance</th>
          <th>nTxIndex </th>
          <th>USDC balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.get("ethAddress")}</td>
          <td>{balance && <b>{balance}</b>}</td>
          <td>{nTxIndex && <b>{nTxIndex}</b>}</td>
          <td>{usdcBalance && <b>{usdcBalance}</b>}</td>
        </tr>
      </tbody>
    </table>

  )
}

