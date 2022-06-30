import React from "react";
import { useMoralisWeb3Api, useWeb3Contract } from "react-moralis";
import { Moralis } from "moralis";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box } from "@chakra-ui/react";
import { useEffect, useState } from 'react';


export default function Invest({account}) {
    const Web3Api = useMoralisWeb3Api()
    const [usdcInvestment, setUsdcInvestment] = useState(250)
    const { runContractFunction, contractResponse, error, isRunning, isLoading } = useWeb3Contract({
        abi: [{ "inputs": [{ "internalType": "address", "name": "_investToken", "type": "address" }, { "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_duration", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }, { "internalType": "uint256", "name": "_minInvest", "type": "uint256" }, { "internalType": "uint256", "name": "_maxInvest", "type": "uint256" }, { "internalType": "uint256", "name": "_maxToCollect", "type": "uint256" }, { "internalType": "address", "name": "_fundsRedeemer", "type": "address" }, { "internalType": "address", "name": "_nrt", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Invest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "RedeemEnabled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "SaleEnabled", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "depositmLaunchtoken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "duration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "enableRedeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enableSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundsRedeemer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hasSaleEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "investAmount", "type": "uint256" }], "name": "invest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "investToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "investorInfoMap", "outputs": [{ "internalType": "uint256", "name": "amountInvested", "type": "uint256" }, { "internalType": "bool", "name": "claimed", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxInvest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxToCollect", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minInvest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mlaunchToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nrt", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "numInvested", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "redeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "redeemEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "saleEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newfundsRedeemer", "type": "address" }], "name": "setNewFundsRedeemer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_mlaunchToken", "type": "address" }], "name": "setmLaunchToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalIssued", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRedeem", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawFundsRedeemer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawmLaunchtoken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
        contractAddress: "0x61158c933c2D4a4689B7c839620B432f6d98b815",
        functionName: "invest",
        params: { investAmount: Moralis.Units.Token(usdcInvestment, "6") }
    });
    

    async function executeInvest() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()
            console.log("invest")
            console.log(options)


            const optionsAllowance2 = options.allowance
            optionsAllowance2.params.owner = account
            optionsAllowance2.params.spender = options.contractAddress

            const balance = await Web3Api.native.runContractFunction(optionsAllowance2)
            const usdc_allowance = Moralis.Units.FromWei(balance, 6)

            if (parseFloat(usdc_allowance) >= 250) {
                runContractFunction()
            } else {
                alert("Execute Approve first.")
            }

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box bg="white" width="full" height="full" px="40" py="10" rounded="lg" shadow="lg" textAlign="center">
            <NumberInput defaultValue={250} min={250} max={2000} onChange={e => setUsdcInvestment(e)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <button type="button" onClick={() => executeInvest()} disabled={isLoading} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Invest</button>
        </Box>
    )
}
