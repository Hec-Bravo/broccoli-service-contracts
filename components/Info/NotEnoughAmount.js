import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function NotEnoughAmount() {
    return (
        <Box bg="white" width="full" height="full" px="40" py="10" rounded="lg" shadow="lg" textAlign="center">
            <Text class="text-2xl" fontWeight="bold" color="dark">A minimum of $250 USDC is required to invest.</Text>
        </Box>
    )
}

