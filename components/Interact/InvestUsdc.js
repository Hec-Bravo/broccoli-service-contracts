import { Flex, Text, Box, TableContainer, Table, TableCaption, Thead, Tbody, Tr, Td, Th, Tfoot } from "@chakra-ui/react";
import React from "react";



import BalanceAmeGNX from '../Info/BalanceAmeGNX';
import BalanceUsdcInvested from '../Info/BalanceUsdcInvested';
import BalanceUsdc from '../Info/BalanceUsdc';
import Investing from '../Buttons/Investing';

export default function InvestUsdc({ user }) {

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="aliceblue">


            <Box bg="white" width="800px" height="550px" rounded="lg" shadow="lg" textAlign="center">
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>
                            <Investing user={user} />
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
                                <Td isNumeric><BalanceUsdc user={user} /></Td>
                                <Td isNumeric><BalanceAmeGNX user={user} /></Td>
                                <Td isNumeric><BalanceUsdcInvested user={user} /></Td>
                            </Tr>
                            <Tr>
                                <Td>Min to invest per transaction:</Td>
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
            </Box>
        </Flex>

    )
}