import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function MyContractRead() {
    const [totalRaised, setTotalRaised] = useState(0)
    const [totalIssued, setTotalIssued] = useState(0)
    const [totalRedeem, setTotalRedeem] = useState(0)
    
    const moralisAPI = useMoralisWeb3Api()

    useEffect(() => {
        getContractInfo()
    }, []);


    async function getContractInfo() {
        try {
            const res = await fetch('/api/user')
            const options = await res.json()

            const options1 = options.totalraised
            const raised = await moralisAPI.native.runContractFunction(options1)
            console.log(raised)
            if (raised) {
                setTotalRaised(Moralis.Units.FromWei(raised))
            }

            const options2 = options.totalissued
            const issued = await moralisAPI.native.runContractFunction(options2)
            console.log(issued)
            if (issued) {
                setTotalIssued(Moralis.Units.FromWei(issued))
            }

            const options3 = options.totalredeem
            const redeem = await moralisAPI.native.runContractFunction(options3)
            console.log(redeem)
            if (redeem) {
                setTotalRedeem(Moralis.Units.FromWei(redeem))
            }

            

        } catch (e) {
            console.log(e)
        }
    }



    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Raised:
                {totalRaised && <b>{totalRaised}</b>}</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Issued:
                {totalIssued && <b>{totalIssued}</b>}</li>
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Redeemed:
                {totalRedeem && <b>{totalRedeem}</b>}</li>

        </ul>
    )
}

