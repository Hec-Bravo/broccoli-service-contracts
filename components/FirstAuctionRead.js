import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function FirstAuctionRead() {
    const [totalRaised, setTotalRaised] = useState(0)
    const [totalIssued, setTotalIssued] = useState(0)
    const [totalRedeem, setTotalRedeem] = useState(0)
    

    const moralisAPI = useMoralisWeb3Api()

    useEffect(() => {
        getContractInfo()
    }, []);


    async function getContractInfo() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const options1 = options.totalRaised
            const raised = await moralisAPI.native.runContractFunction(options1)
            //console.log(raised)
            if (raised) {
                setTotalRaised(Moralis.Units.FromWei(raised, 6))
            }

            const options2 = options.totalIssued
            const issued = await moralisAPI.native.runContractFunction(options2)
            if (issued) {
                setTotalIssued(Moralis.Units.FromWei(issued))
            }

            const options3 = options.totalRedeem
            const redeem = await moralisAPI.native.runContractFunction(options3)
            if (redeem) {
                setTotalRedeem(Moralis.Units.FromWei(redeem))
            }

            


        } catch (e) {
            console.log(e)
        }
    }



    return (
        <table className="table-fixed text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <thead>
                <tr>
                    <th>Raised</th>
                    <th>Issued</th>
                    <th>Redeemed</th>
                    <th>Price</th>
                    <th>Min invertir</th>
                    <th>Max invertir</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{totalRaised && <b>{totalRaised}</b>}</td>
                    <td>{totalIssued && <b>{totalIssued}</b>}</td>
                    <td>{totalRedeem && <b>{totalRedeem}</b>}</td>
                    <td>$ 0.05</td>
                    <td>$ 250</td>
                    <td>$ 2,000</td>
                </tr>
            </tbody>
        </table>
    )
}

