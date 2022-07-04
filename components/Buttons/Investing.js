import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';
import { Box, Text } from "@chakra-ui/react";

import Approve from './Approve';
import Invest from './Invest';

export default function Investing({ user }) {
    const [data, setData] = useState({ usdcBalance: "0"})
    const Web3Api = useMoralisWeb3Api()


    async function getValues() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const optionsBalance = options.balanceOf
            optionsBalance.address = options.investTokenAddress
            optionsBalance.params.account = user.get("ethAddress")

            const balance = await Web3Api.native.runContractFunction(optionsBalance)
            if (balance) {
                const usdc_balance = Moralis.Units.FromWei(balance, 6)
                setData({ usdcBalance: usdc_balance})
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Box bg="white" width="full" height="full" px="40" py="10" rounded="lg" shadow="lg" textAlign="center">
            {Boolean(parseFloat(data.usdcBalance) >= 250) ?
                <div>
                    <Text class="text-2xl" fontWeight="bold" color="dark">Approve your balance to invest</Text>
                    <Approve account={user.get("ethAddress")}/>
                    <Text class="text-2xl" fontWeight="bold" color="dark">Enter amount you want to invest</Text>
                    <Invest account={user.get("ethAddress")}/>  
                </div>
                :
                <><Text class="text-2xl" fontWeight="bold" color="dark">Make sure you have enough USDC</Text>
                    <button type="button" onClick={getValues} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Invest
                    </button></>
            }
        </Box>
    )
}
