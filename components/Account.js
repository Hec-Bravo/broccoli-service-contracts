import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';

import Buy from './botones/Buy';
import Trade from "./botones/Trade";
import Approve from './botones/Approve';
import Invest from './botones/Invest';


export default function Account({ user }) {
  const [balance, setBalance] = useState(0)
  const [usdcBalance, setUsdcBalance] = useState(0)
  const [usdcAllowance, setUsdcAllowance] = useState(0)
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
        //   from_block: "8961689"
      }

      const account_balance = await Web3Api.account.getNativeBalance(options1)
      console.log(account_balance)
      if (account_balance.balance) {
        setBalance(Moralis.Units.FromWei(account_balance.balance))
      }



      const options2 = options.balanceOf
      options2.params.account = options1.address
      const usdc_balance = await Web3Api.native.runContractFunction(options2)
      if (usdc_balance) {
        setUsdcBalance(Moralis.Units.FromWei(usdc_balance, 6))
      }

      const options3 = options.usdcAllowance
      options3.params.owner = options1.address
      options3.params.spender = options.investTokenAddress
      const usdc_allowance = await Web3Api.native.runContractFunction(options3)
      if (usdc_allowance) {
        setUsdcAllowance(Moralis.Units.FromWei(usdc_allowance, 6))
      }

    } catch (e) {
      console.log(e)
    }
  }



  return (
    <><table className="table-fixed text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <thead>
        <tr>
          <th>Account</th>
          <th>Avax balance</th>
          <th>USDC balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.get("ethAddress")}</td>
          <td>{balance && <b>{balance}</b>}</td>
          <td>{usdcBalance && <b>{usdcBalance}</b>}</td>
        </tr>
      </tbody>
    </table>
      <div className="flex justify-center items-center h-screen">
        {Boolean(balance > 0) ?
          <div>
            {Boolean(usdcBalance > 250) ?
              <div>
                {Boolean(usdcAllowance == 2000) ?
                  <div>
                    <Invest />
                  </div>
                  :
                  <div>
                    <Approve />
                  </div>
                }
              </div>
              :
              <div>
                <Trade />
              </div>
            }
          </div>
          :
          <div>
            <Buy />
          </div>
        }
      </div>
    </>
  )
}

