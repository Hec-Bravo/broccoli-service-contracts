import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";

export default function BalanceUsdcInvested({ user }) {
    const [balance, setBalance] = useState(0)
    const Web3Api = useMoralisWeb3Api()

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const options1 = options.balanceOf
            options1.address = options.ameGNXAddress
            options1.params.account = user.get("ethAddress")
            const amegnx_balance = await Web3Api.native.runContractFunction(options1)
            if (amegnx_balance) {
                const amegnx_amount = Moralis.Units.FromWei(amegnx_balance, 18)
                setBalance(amegnx_amount * 0.05)
            }

            } catch (e) {
                console.log(e)
            }
    }



    return (
            <>
                <Text class="text-2xl" fontWeight="bold" color="dark">{balance && <b>{balance}</b>}</Text>
            </>
        )
    }
