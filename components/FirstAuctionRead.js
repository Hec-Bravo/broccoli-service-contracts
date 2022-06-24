import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function FirstAuctionRead() {
    const [totalIssued, setTotalIssued] = useState(0)

    

    const moralisAPI = useMoralisWeb3Api()

    useEffect(() => {
        getContractInfo()
    }, []);


    async function getContractInfo() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const options1 = options.totalIssued
            const issued = await moralisAPI.native.runContractFunction(options1)
            if (issued) {
                setTotalIssued(Moralis.Units.FromWei(issued))
            }



        } catch (e) {
            console.log(e)
        }
    }



    return (
        <table className="table-fixed text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <thead>
                <tr>
                    <th>ameGNX Issued</th>
                    <th>Price</th>
                    <th>Min invertir</th>
                    <th>Max invertir</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{totalIssued && <b>{totalIssued}</b>}</td>
                    <td>$ 0.05</td>
                    <td>$ 250</td>
                    <td>$ 2,000</td>
                </tr>
            </tbody>
        </table>
    )
}

