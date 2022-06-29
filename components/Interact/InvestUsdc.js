import { Flex, Image, Text, Box, Center, TableContainer, Table, TableCaption, Thead, Tbody, Tr, Td, Th, Tfoot } from "@chakra-ui/react";
import CustomContainer from "../Basic/CustomContainer";
import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { useEffect, useState } from 'react';

import NotEnoughAmount from "../Info/NotEnoughAmount";
import Approve from '../Buttons/Approve';
import Invest from '../Buttons/Invest';
import AmeGNXBalance from '../Info/AmeGNXBalance';
import UsdcInvested from '../Info/UsdcInvested';

export default function InvestUsdc({ user }) {
    const [data, setData] = useState({ usdcBalance: 0, usdcAllowance: 0 })
    const Web3Api = useMoralisWeb3Api()

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
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



    return (
        <CustomContainer>
            <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="aliceblue">

                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>
                            {Boolean(data.usdcBalance >= 250) ?
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
                                <div>
                                    <NotEnoughAmount />
                                </div>
                            }

                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>USDC balance</Th>
                                <Th>ameGNX owned</Th>
                                <Th isNumeric>USDC invested</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td isNumeric>{data.usdcBalance && <b>{data.usdcBalance}</b>}</Td>
                                <Td isNumeric><AmeGNXBalance user={user} /></Td>
                                <Td isNumeric><UsdcInvested user={user} /></Td>
                            </Tr>
                            <Tr>
                                <Td>Min to invest per account:</Td>
                                <Td isNumeric>$250</Td>
                                <Td></Td>
                            </Tr>
                            <Tr>
                                <Td>Max to invest per account:</Td>
                                <Td isNumeric>$2,000</Td>
                                <Td></Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th><Text class="text-2xl" fontWeight="bold" color="dark">ameGNX price: </Text></Th>
                                <Th isNumeric><Text class="text-2xl" fontWeight="bold" color="dark">$0.05</Text></Th>
                                <Th></Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

            </Flex>
        </CustomContainer>

    )
}