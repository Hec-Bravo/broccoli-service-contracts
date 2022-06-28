import { Flex, Image, Text, Box, Center } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import CustomContainer from "../Basic/CustomContainer";
import React from "react";

export default function TradeAvax({ user }) {
    const [input, setInput] = React.useState('')
    const { setUserData, isUserUpdating } = useMoralis();
    return (
        <CustomContainer>
            <Flex direction="column" justifyContent="center" alignItems="center" width="50vw" height="50vh" bgColor="aliceblue">

                <Text class="text-2xl" fontWeight="bold" color="dark">Swap AVAX for USDC at Joe Trader</Text>
                <Box boxSize='fit-content'>
                    <button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.open('https://traderjoexyz.com/trade#/');
                    }} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Swap
                    </button>
                </Box>

            </Flex>
        </CustomContainer>

    )
}