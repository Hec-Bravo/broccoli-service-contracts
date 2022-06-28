import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';

import { Text } from "@chakra-ui/react";

export default function HeaderBalance({ user }) {
  const [balance, setBalance] = useState(0)
  const Web3Api = useMoralisWeb3Api()

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    try {
      const res = await fetch('/api/firstAuction')
      const options = await res.json()

      const options1 = options.account
      options1.address = user.get("ethAddress")

      const account_balance = await Web3Api.account.getNativeBalance(options1)
      if (account_balance.balance) {
        setBalance(Moralis.Units.FromWei(account_balance.balance))
      }

    } catch (e) {
      console.log(e)
    }
  }



  return (
    <>
      <Text class="text-2xl">{balance && <b>{balance}</b>}</Text>
    </>
  )
}
