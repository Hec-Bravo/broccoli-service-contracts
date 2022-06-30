import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';
import { Box, Text } from "@chakra-ui/react";

import Approve from './Approve';
import Invest from './Invest';

export default function Investing({ user }) {
    const [data, setData] = useState({usdcBalance: 0, usdcAllowance: 0})
    const Web3Api = useMoralisWeb3Api()


    async function getValues() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const options1 = options.balanceOf
            options1.address = options.investTokenAddress
            options1.params.account = user.get("ethAddress")


            const options2 = options.allowance
            options2.params.owner = user.get("ethAddress")
            options2.params.spender = options.contractAddress

            const gross_values = await Promise.all([Web3Api.native.runContractFunction(options1), Web3Api.native.runContractFunction(options2)])


            if (gross_values[0] && gross_values[1]) {
                const usdc_balance = Moralis.Units.FromWei(gross_values[0], 6)
                const usdc_allowance = Moralis.Units.FromWei(gross_values[1], 6)
                setData({ usdcBalance: usdc_balance, usdcAllowance: usdc_allowance })
            }


        } catch (e) {
            console.log(e)
        }
    }

    async function getInfo() {
        console.log(typeof(data.usdcAllowance))
        console.log(data)
    }


    return (
        <Box bg="white" width="full" height="full" px="40" py="10" rounded="lg" shadow="lg" textAlign="center">
            {Boolean(parseFloat(data.usdcBalance)>= 250) ? 
                <div>
                 {Boolean(data.usdcAllowance >= 250) ?
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
                <><Text class="text-2xl" fontWeight="bold" color="dark">Make sure you have enough USDC</Text>
                <button type="button" onClick={getValues} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Invest</button></>
            }
        </Box>
    )
}

