import { Flex, Image, Text, Box, Center, TableContainer, Table, TableCaption, Thead, Tbody, Tr, Td, Th, Tfoot } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import CustomContainer from "../Basic/CustomContainer";
import React from "react";

import UsdcBalance from '../Info/UsdcBalance'
import AmeGNXBalance from '../Info/AmeGNXBalance'
import UsdcInvested from '../Info/UsdcInvested'

export default function InvestUsdc({ user }) {
    const [input, setInput] = React.useState('')
    const { setUserData, isUserUpdating } = useMoralis();
    return (
        <CustomContainer>
            <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="aliceblue">

                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>USDC balance</Th>
                                <Th>ameGNX owned</Th>
                                <Th isNumeric>USDC invested</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td isNumeric><UsdcBalance user={user}/></Td>
                                <Td isNumeric><AmeGNXBalance user={user}/></Td>
                                <Td isNumeric><UsdcInvested user={user}/></Td>
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