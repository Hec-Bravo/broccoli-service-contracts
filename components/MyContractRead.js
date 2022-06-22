import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';


export default function MyContractRead() {
    const [totalRaised, setTotalRaised] = useState(0)
    const [totalIssued, setTotalIssued] = useState(0)
    const [totalRedeem, setTotalRedeem] = useState(0)
    const [price, setPrice] = useState(0)
    const [minInvest, setMinInvest] = useState(0)
    const [maxInvest, setMaxInvest] = useState(0)

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
            console.log(raised)
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

            const options4 = options.price
            const var_price = await moralisAPI.native.runContractFunction(options4)
            if (var_price) {
                setPrice(Moralis.Units.FromWei(var_price, 6))
            }

            const options5 = options.minInvest
            const var_minInvest = await moralisAPI.native.runContractFunction(options5)
            if (var_minInvest) {
                setMinInvest(Moralis.Units.FromWei(var_minInvest, 6))
            }

            const options6 = options.maxInvest
            const var_maxInvest = await moralisAPI.native.runContractFunction(options6)
            console.log(var_maxInvest)
            if (var_maxInvest) {
                setMaxInvest(Moralis.Units.FromWei(var_maxInvest, 6))
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
                    <th>Min inversión</th>
                    <th>Max inversión</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{totalRaised && <b>{totalRaised}</b>}</td>
                    <td>{totalIssued && <b>{totalIssued}</b>}</td>
                    <td>{totalRedeem && <b>{totalRedeem}</b>}</td>
                    <td>{price && <b>{price}</b>}</td>
                    <td>{minInvest && <b>{minInvest}</b>}</td>
                    <td>{maxInvest && <b>{maxInvest}</b>}</td>
                </tr>
            </tbody>
        </table>
    )
}

